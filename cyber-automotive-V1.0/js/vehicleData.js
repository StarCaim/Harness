document.addEventListener("DOMContentLoaded", function (event) {
  fetch("js/json/CarInventory.json")
    .then((response) => response.json())
    .then((data) => {
      let cars = [];
      for (var carName in data) {
        cars.push(data[carName]);
        carMakes(data[carName].make);
      }

      for (let i = 0; i < 8; i++) {
        // console.log(cars[2])
        setFeatured(cars[i]);
      }
      carMakes();
      activate();
    });
});

function newElement(element) {
  return document.createElement(element);
}

if (window.location.hash) {
  var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
  document.addEventListener("DOMContentLoaded", function (event) {
    fetch("js/json/CarInventory.json")
      .then((response) => response.json())
      .then((data) => {
        fillData(data[hash.replaceAll("%20", " ").replaceAll("%22", "'")]);
      });
  });
} else {
}
function fillData(target) {
  document.getElementById(
    "name"
  ).innerHTML = `${target.productionYear} ${target.make} ${target.model}`;
  document.getElementById(
    "breadName"
  ).innerHTML = `${target.make} ${target.model}`;

  document.getElementById("manufacturer").innerHTML = target.make;

  document.getElementById("mileage").innerHTML = `${target.mileage}`;

  document.getElementById("speed").innerHTML = target.topSpeed;

  document.getElementById("price").innerHTML = `$${target.price}`;

  document.getElementById("fuel").innerHTML = `${target.fuel}`;

  document.getElementById("exColor").innerHTML = `${target.exteriorColor}`;

  document.getElementById("inColor").innerHTML = `${target.interiorColor}`;

  document.getElementById("cityEconomy").innerHTML = `${target.cityEconomy}`;

  document.getElementById(
    "highwayEconomy"
  ).innerHTML = `${target.highwayEconomy}`;

  let manufacturerImg = document.getElementById("manufacturerImg");

  switch (target.make) {
    case "Hammurabi":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Hammurabi.png"
      );
      break;
    case "Jade":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Jade.png"
      );
      break;
    case "Nile":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Nile.png"
      );
      break;
    case "Okami":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Okami.png"
      );
      break;
    case "Olympus":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Olympus.png"
      );
      break;
    case "Taliesin":
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Taliesin.png"
      );
      break;
    default:
      manufacturerImg.setAttribute(
        "src",
        "./images/manufacturer_images/Valhalla.png"
      );
  }

  document.getElementById(
    "original-price"
  ).innerHTML = `$${target.originalPrice}`;

  for (let i = 1; i < target.images.length + 1; i++) {
    let slideshow = document.getElementById("slideshow");
    let mySlides = newElement("div");
    let numbertext = newElement("div");
    let img = newElement("img");

    mySlides.setAttribute("class", "mySlides");
    numbertext.setAttribute("class", "numbertext");
    numbertext.innerHTML = i + " / " + target.images.length;
    img.setAttribute("src", target.images[i - 1]);
    img.setAttribute("style", "width: 100%;");

    slideshow.appendChild(mySlides);
    mySlides.appendChild(numbertext);
    mySlides.appendChild(img);
  }

  let next = newElement("a");
  let prev = newElement("a");
  let thumbRow = newElement("div");

  prev.setAttribute("class", "prev");
  prev.setAttribute("onclick", "plusSlides(-1)");
  prev.innerHTML = "&#10094;";

  next.setAttribute("class", "next");
  next.setAttribute("onclick", "plusSlides(1)");
  next.innerHTML = "&#10095;";

  thumbRow.setAttribute("class", "row");

  slideshow.appendChild(prev);
  slideshow.appendChild(next);
  slideshow.appendChild(thumbRow);

  for (let i = 1; i < target.images.length + 1; i++) {
    let divColumn = newElement("div");
    let img = newElement("img");

    divColumn.setAttribute("class", "col-6 col-md-4");
    img.setAttribute("class", "demo cursor");
    img.setAttribute("src", target.images[i - 1]);
    img.setAttribute("style", "width: 100%");
    img.setAttribute("onclick", `currentSlide(${i})`);

    thumbRow.appendChild(divColumn);
    divColumn.appendChild(img);
  }

  document.getElementById(
    "provideInfo"
  ).value = `Could you provide more information about this ${target.productionYear} ${target.make} ${target.model}?`;

  showSlides(slideIndex);
}
