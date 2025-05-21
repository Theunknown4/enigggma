function initializeLevel1()
{
    generateStars('hiddenStars', 'white');
    setupInputCheckLevel1();
    setupProtections();
}

function setupInputCheckLevel1()
{
    const secretInput = document.getElementById('secretInputLVL1');
    const message = document.getElementById('message');
    if (!secretInput || !message) return;

    secretInput.addEventListener('input', function ()
    {
        const inputValue = secretInput.value.toLowerCase().trim();

        if (inputValue === 'espressioni nascoste')
        {
            setMessage(message, '                       ', 'success');
            secretInput.style.display = 'none';
            changeLevel(2);
        }
        else if (inputValue.length < 20)
        {
            setMessage(message, 'Parola errata, riprova!', 'error');
        }
        else
        {
            setMessage(message, 'analizza ciò che vedi');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeLevel1);
