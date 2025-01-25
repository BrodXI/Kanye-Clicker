let cookies = 0;
let cps = 0;
let arcCost = 10;
let arcUpgradeCost = 50;
let arcState = null;

let ARCs = 0;
let arcUpgrades = 0;

const cookiesSpan = document.getElementById('cookie-count');
const cpsSpan = document.getElementById('cps');
const arcCostSpan = document.getElementById('arcCost');
const arcUpgradeCostSpan = document.getElementById('arcUpgradeCost');

const cookieImg = document.getElementById('cookieImg');

function updateData() {
  //TODO - find someway to eventually link this to localStorage (when i set that up (also eventually))

  cookiesSpan.innerHTML = cookies
  arcCostSpan.innerHTML = arcCost
  arcUpgradeCostSpan.innerHTML = arcUpgradeCost
  cpsSpan.innerHTML = cps
}

function increaseCookies() {
  //todo - adding multipliers? like as an upgrade
  cookies += 1
  updateData()
}

function buyRecordClicker() {
  if ( cookies >= arcCost  ) {
    cookies -= arcCost
    arcCost = Math.floor(arcCost * 1.5)
    ARCs += 1
    cps += 1
  }

  updateData()
  arcRun()
}

function upgradeARC() {
  if ( cookies >= arcUpgradeCost ) {
    cookies -= arcUpgradeCost
    arcUpgradeCost = Math.floor(arcUpgradeCost * 1.7)
    arcUpgrades += 1
    cps += 2 * arcUpgrades
  }
}

// ! these parts i think might be EXTREMELY buggy b/c i have never done code like this !

function arcRun() {
  if ( !arcState ) {
    arcState = setInterval(() => {
      cookies += cps;
      document.getElementById('cookie-count').textContent = cookies;
    }, 1000)
  }
  console.log("arc started")
}

function arcStop() {
  if ( arcState ) {
    clearInterval(arcState)
    arcState = null
    console.log("arc stopped")
  }
}

cookieImg.addEventListener('click', function() {
  if ( !cookieImg.classList.contains('cookieAnimated') ) {
    cookieImg.classList.toggle('cookieAnimated')
    setTimeout(function() {
      cookieImg.classList.toggle('cookieAnimated')
    }, 800)
  } else return;
})

// this is the dark mode switch stuff

const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})