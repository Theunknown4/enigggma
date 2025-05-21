// Ritardo asincrono
function delay(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeLevel(level)
{
    const transition = document.getElementById('levelTransition');
    if (transition)
    {
        // Nasconde tutto tranne #levelTransition
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(child =>
        {
            if (child.id !== 'levelTransition')
            {
                child.style.display = 'none';
            }
        });

        // Mostra la transizione centrata
        transition.style.display = 'flex';
        transition.style.opacity = '1';

        await delay(1500);
        transition.style.opacity = '0';
        await delay(1000);
        transition.style.display = 'none';
    }
    if (level === -1)
        window.location.href = `HTML/Level1.html`;
    else
        window.location.href = `Level${level}.html`;
}

function setMessage(messageElement, text, className = '', color = '')
{
    messageElement.textContent = text;
    messageElement.className = className;
    messageElement.style.color = color;
}

// Anti-inspector
function setupProtections()
{
    /*
    document.addEventListener('contextmenu', function (e)
    {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function (e)
    {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
            (e.ctrlKey && e.key === 'U')
        )
        {
            e.preventDefault();
            return false;
        }
    });
    */
   alert("Protections Disabled");
}

// Generazione stelle condivisa
function generateStars(targetId, color = 'white')
{
    let starsContainer = document.getElementById(targetId);

    if (!starsContainer)
    {
        starsContainer = document.createElement('div');
        starsContainer.id = targetId;
        starsContainer.style.position = 'fixed';
        starsContainer.style.top = '0';
        starsContainer.style.left = '0';
        starsContainer.style.width = '100vw';
        starsContainer.style.height = '100vh';
        starsContainer.style.pointerEvents = 'none';
        starsContainer.style.zIndex = '1';
        document.body.appendChild(starsContainer);
    }

    const chars = ['·', '*', '·', '·', '*'];
    const starCount = 1000;
    starsContainer.innerHTML = '';

    for (let i = 0; i < starCount; i++)
    {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.fontSize = `${Math.random() * 0.5 + 0.8}em`;
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.color = color;
        star.textContent = chars[Math.floor(Math.random() * chars.length)];
        starsContainer.appendChild(star);
    }
}
