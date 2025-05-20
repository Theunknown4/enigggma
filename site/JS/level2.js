function initializeLevel2()
{
    const hiddenMorse = document.getElementById('hiddenMorse');
    if (hiddenMorse)
    {
        hiddenMorse.style.opacity = '1';
    }
    generateStars('hiddenStars', 'black');
    setupInputCheckLevel2();
    setupProtections();
}

function setupInputCheckLevel2()
{
    const secretInput = document.getElementById('secretInputLVL2');
    const message = document.getElementById('message');
    if (!secretInput || !message) return;

    secretInput.addEventListener('input', function ()
    {
        const inputValue = secretInput.value.toLowerCase().trim();

        if (inputValue === 'adolescenza')
        {
            setMessage(message, 'Periodo giusto', '', 'green');
            secretInput.style.display = 'none';

            setTimeout(function ()
            {
                document.body.innerHTML = '<h1>Livello 3</h1><p>ehm, work in progress penso...</p>';
                changeLevel(3);
            }, 1500);
        }
        else if (inputValue.length !== 11)
        {
            setMessage(message, 'Soluzione errata, riprova!', 'error');
        }
        else
        {
            setMessage(message, 'suggerimento: periodo?');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeLevel2);
