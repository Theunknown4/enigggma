function generateStarsLvlIndex()
{
    //console.log("Generating stars Index");
    let starsContainer = document.getElementById('hiddenStars');

    if (!starsContainer)
    {
        starsContainer = document.createElement('div');
        starsContainer.id = 'hiddenStars';
        starsContainer.style.position = 'fixed';
        starsContainer.style.top = '0';
        starsContainer.style.left = '0';
        starsContainer.style.width = '100vw';
        starsContainer.style.height = '100vh';
        starsContainer.style.pointerEvents = 'none';
        starsContainer.style.zIndex = '1'; // Sopra o sotto? Cambia qui
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
        star.style.color = 'white';
        star.textContent = chars[Math.floor(Math.random() * chars.length)];
        starsContainer.appendChild(star);
    }
}

function initializeLevelIndex()
{
    generateStarsLvlIndex();
}

document.addEventListener("DOMContentLoaded", function()
{
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    yesButton.addEventListener("click", function()
    {
        changeLevel(-1)
    });

    noButton.addEventListener("click", function()
    {
        document.getElementById("welcomeText").innerHTML 
        = "<p>Allora che stracazzo ci fai qui?? </p>";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});
