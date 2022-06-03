let planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

planets.reverse();

let pickPlanet = document.getElementById("planets");
planets.forEach((planet) => {
  let option = document.createElement("option");
  option.value = planet[0];
  option.innerText = planet[0];
  pickPlanet.appendChild(option);
});

function calculateWeight(weight, planetName) {
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] == planetName) {
      return parseInt(weight) * planets[i][1];
    }
  }
}
function handleClickEvent(e) {
  let userWeight = parseInt(document.getElementById("user-weight").value);
  let planetName =
    document.querySelectorAll("#planets option")[
      document.getElementById("planets").selectedIndex
    ].textContent;
  let result = calculateWeight(userWeight, planetName);
  result = Math.round(result * 100) / 100;
  document.getElementById("output").innerHTML =
    "If you were on " + planetName + ", you would weigh " + result + "lbs!";
}
document
  .getElementById("calculate-button")
  .addEventListener("click", handleClickEvent);
