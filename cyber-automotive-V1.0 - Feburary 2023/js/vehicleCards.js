function newElement(element) {
  return document.createElement(element);
}

function setFeatured(target) {
  let vehicleRow = document.getElementById("cardRow");

  let cardContainer = newElement("div");
  let card = newElement("div");
  let vehiclePhoto = newElement("div");
  let vehiclePrice = newElement("div");
  let vehicleInfo = newElement("div");

  console.log(vehicleRow)

  vehicleRow.appendChild(cardContainer);

  cardContainer.setAttribute("class", "col-xxl-3 col-xl-4 col-md-6");
  cardContainer.appendChild(card);

  card.setAttribute("class", "vehicle-card");
  card.appendChild(vehiclePhoto);
  card.appendChild(vehiclePrice);
  card.appendChild(vehicleInfo);
  vehiclePhoto.setAttribute("class", "vehicle-photo");
  vehiclePrice.setAttribute("class", "vehicle-price");
  vehicleInfo.setAttribute("class", "vehicle-info");

  //putting in info
  let photoLink = newElement("a");
  let vehicleImage = newElement("img");
  let special = newElement("span");
  let infoLink = newElement("a");
  let title = newElement("h2");
  let miles = newElement("p");

  vehiclePhoto.appendChild(photoLink);
  photoLink.setAttribute(
    "title",
    `Used ${target.productionYear} ${target.make} ${target.model}`
  );
  photoLink.setAttribute("href", `./vehicle.html#${target.make} ${target.model}`);
  photoLink.appendChild(vehicleImage);

  vehicleImage.setAttribute("class", "img-responsive");
  vehicleImage.setAttribute("src", `${target.images[0]}`);
  vehicleImage.setAttribute(
    "alt",
    `Used ${target.productionYear} ${target.make} ${target.model} for sale`
  );
  vehicleImage.setAttribute("loading", "lazy");

  vehiclePrice.appendChild(special);
  special.setAttribute("class", "special");
  vehiclePrice.innerHTML = `$${target.price} <span class="special">$${target.originalPrice}</span>`;
  special.innerHTML = `${target.originalPrice}`;

  vehicleInfo.appendChild(infoLink);
  infoLink.setAttribute("href", `./vehicle.html#${target.make} ${target.model}`);
  infoLink.appendChild(title);
  title.setAttribute("class", "vehicle-title ellipsis");
  title.innerHTML = `${target.productionYear} ${target.make} ${target.model}`;
  vehicleInfo.appendChild(miles);
  miles.setAttribute("class", "vehicle-miles ellipsis");
  miles.innerHTML = `${target.mileage} miles`;
}

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("js/json/CarInventory.json")
    .then((response) => response.json())
    .then((data) => {
      for (var carName in data) {
        setFeatured(data[carName]);
      }
    });
});

let carMakesArr = []

function carMakes(target) {
  const makeBox = document.getElementById("select-make");
  const make = target;

  if (carMakesArr.includes(make)) {
  } else if (make === undefined) {
  } else {
    carMakesArr.push(make);
    let option = newElement("option");
    option.setAttribute("value", target);
    option.innerHTML = target;
    makeBox.appendChild(option);
  }
}



document.getElementById("select-make").onchange = function carModelActivate() {
  const make = document.getElementById("select-make").value;
  let selectModel = document.getElementById("select-model");
  let allModels = newElement("option");

  allModels.innerHTML = "All Models";

  selectModel.innerHTML = "";
  selectModel.appendChild(allModels);

  if (make == "All Makes") {
    selectModel.disabled = true;
  } else {
    selectModel.disabled = false;
  }

  fetch("js/json/CarInventory.json")
    .then((response) => response.json())
    .then((data) => {
      for (var carName in data) {
        // console.log(data[carName].make)
        // console.log(make)
        if (data[carName].make == make) {
          const model = data[carName].model;

          const option = newElement("option");
          option.setAttribute("value", model);
          option.setAttribute("class", "removeModel");
          option.innerHTML = model;
          selectModel.appendChild(option);
        } else {
        }
      }
    });
};
