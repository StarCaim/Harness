
function newElement(element) {
  return document.createElement(element);
}

const select = document.getElementById("VOI")

function vehicleOfInterest(target) {
  let option = newElement('option')

  option.setAttribute('value', `${target.productionYear} ${target.make} ${target.model}`)
  option.innerHTML = `${target.productionYear} ${target.make} ${target.model}`

  select.appendChild(option)
}

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("js/json/CarInventory.json")
    .then((response) => response.json())
    .then((data) => {
      for (var carName in data) {
        vehicleOfInterest(data[carName]);
      }
    });
});