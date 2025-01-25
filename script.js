let cookies = 0;
let cps = 0;
let upgrade1Cost = 10;
let upgrade2Cost = 100;
let clickers = 0;
let clicker1cost= 10;

function increaseCookies() {
  cookies += 1;
  document.getElementById('cookie-count').textContent = cookies;
}

function buyUpgrade(upgrade) {
  if (upgrade === 1 && cookies >= upgrade1Cost) {
    cps += 1;
    clickers += 1;
    clicker1cost += 15;
    cookies -= upgrade1Cost;
    upgrade1Cost = Math.floor(upgrade1Cost + 15); // Increase the cost by 10%
  } else if (upgrade === 2 && cookies >= upgrade2Cost) {
    cps += 2;
    cookies -= upgrade2Cost;
    upgrade2Cost = Math.floor(upgrade2Cost * 1.5); // Increase the cost by 50%
  }

  document.getElementById('cookie-count').textContent = cookies;
  document.getElementById('cps').textContent = cps;
  document.getElementById('clicker1cost').textContent = clicker1cost;
  document.getElementById('clickers').textContent = clickers;
  document.getElementById('upgrade1').textContent = `Upgrade 1 (Cost: ${upgrade1Cost})`; // Display updated cost on button
  document.getElementById('upgrade2').textContent = `Upgrade 2 (Cost: ${upgrade2Cost})`; // Display updated cost on button
}

setInterval(() => {
  cookies += cps;
  document.getElementById('cookie-count').textContent = cookies;
}, 1000);

document.getElementById('cookieImg').addEventListener('click', function() {
  const cookieImg = document.getElementById('cookieImg')

  //check if anim already running
  if ( !cookieImg.classList.contains('cookieAnimated') ) {
    cookieImg.classList.toggle('cookieAnimated')
    setTimeout(function() {
    cookieImg.classList.toggle('cookieAnimated')
    }, 800)
  } else {
    return;
  }
})