const valueInputEl = document.getElementById("valueInput");
const convertBtnEl = document.getElementById("convertBtn");

document.addEventListener("DOMContentLoaded", () => {
  valueInputEl.value = JSON.parse(localStorage.getItem("inputValue")) || 3;

  //   lengthConversions(Number(valueInputEl.value));
  //   volumeConversions(Number(valueInputEl.value));
  //   massConversions(Number(valueInputEl.value));
});

convertBtnEl.addEventListener("click", () => {
  localStorage.setItem("inputValue", valueInputEl.value);

  //   lengthConversions(Number(valueInputEl.value));

  //   volumeConversions(Number(valueInputEl.value));

  //   massConversions(Number(valueInputEl.value));
});

//this function sets the length values and the conversions elements
// function lengthConversions(inputValue) {
//   //length document variables
//   const lengthMetersValueEl = document.getElementById("lengthMetersValue");
//   const lengthFeetValueEl = document.getElementById("lengthFeetValue");
//   const lenghtFeetConversionValueEl = document.getElementById(
//     "lenghtFeetConversionValue",
//   );
//   const lengthMetersConversionValueEl = document.getElementById(
//     "lengthMetersConversionValue",
//   );

//   //set the length document values
//   lengthMetersValueEl.textContent = inputValue;
//   lengthFeetValueEl.textContent = inputValue;

//   //fetch the text values then convert them to numbers
//   let lengthMetersValue = inputValue;
//   let lengthFeetValue = inputValue;
//   let conversionValue = 3.28084;

//   let lenghtFeetConversionValue = lengthMetersValue * conversionValue;
//   let lengthMetersConversionValue = lengthFeetValue / conversionValue;

//   lenghtFeetConversionValueEl.textContent =
//     lenghtFeetConversionValue.toFixed(4);
//   lengthMetersConversionValueEl.textContent =
//     lengthMetersConversionValue.toFixed(4);
// }

// //this function sets the volume values and the conversions elements
// function volumeConversions(inputValue) {
//   //volume document variables
//   const volumeLitersValueEl = document.getElementById("volumeLitersValue");
//   const volumeGallonsValueEl = document.getElementById("volumeGallonsValue");
//   const volumeGallonsConversionValueEl = document.getElementById(
//     "volumeGallonsConversionValue",
//   );
//   const volumelitersConversionValueEl = document.getElementById(
//     "volumelitersConversionValue",
//   );

//   //set the volume document values
//   volumeLitersValueEl.textContent = inputValue;
//   volumeGallonsValueEl.textContent = inputValue;

//   let conversionValue = 3.785;

//   //do the conversions
//   let volumeGallonsConversionValue = inputValue / conversionValue;
//   let volumelitersConversionValue = inputValue * conversionValue;

//   volumeGallonsConversionValueEl.textContent =
//     volumeGallonsConversionValue.toFixed(4);
//   volumelitersConversionValueEl.textContent =
//     volumelitersConversionValue.toFixed(4);
// }

// //sets the mass values and the conversions
// function massConversions(inputValue) {
//   //define the document mass elements
//   const massKilosValueEl = document.getElementById("massKilosValue");
//   const massPoundsValueEl = document.getElementById("massPoundsValue");
//   const massPoundsConversionValueEl = document.getElementById(
//     "massPoundsConversionValue",
//   );
//   const massKilosConversionValueEl = document.getElementById(
//     "massKilosConversionValue",
//   );

//   //set the mass document values
//   massKilosValueEl.textContent = inputValue;
//   massPoundsValueEl.textContent = inputValue;

//   let conversionValue = 2.205;

//   //do the conversions
//   let massPoundsConversionValue = inputValue * conversionValue;
//   let massKilosConversionValue = inputValue / conversionValue;

//   //set the conversion values
//   massPoundsConversionValueEl.textContent =
//     massPoundsConversionValue.toFixed(4);
//   massKilosConversionValueEl.textContent = massKilosConversionValue.toFixed(4);
// }

//define a common functions for the cards and the conversion lines

const conversionCardsEl = document.getElementById("conversionCards");
let cardDetails = [
  { name: "Length", units: ["meters", "feet"], factors: [3.28084, 0.3048] },
  {
    name: "Volume",
    units: ["liters", "gallons"],
    factors: [0.264172, 3.78541],
  },
  {
    name: "Weight",
    units: ["kilograms", "pounds"],
    factors: [2.20462, 0.453592],
  },
];

for (const card of cardDetails) {
  let title = `${card["name"]} (${
    card["units"][0].charAt(0).toUpperCase() + card["units"][0].slice(1)
  }/${card["units"][1].charAt(0).toUpperCase() + card["units"][1].slice(1)})`;

  //creating the card
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const titleEl = document.createElement("div");
  titleEl.classList.add("cardTitle");
  titleEl.textContent = title;
  const conversionsEl = document.createElement("conversions");

  //create conversion lines
  //first line
  let lineEl = document.createElement("div");
  lineEl.classList.add("cardLine");
  let conversion = valueInputEl.value * card.factors[0];
  lineEl.textContent = `${valueInputEl.value} ${card.units[0]} = ${conversion.toFixed(5)} ${card.units[1]}`;
  conversionsEl.append(lineEl);

  //second line
  lineEl = document.createElement("div");
  lineEl.classList.add("cardLine");
  conversion = valueInputEl.value * card.factors[1];
  lineEl.textContent = `${valueInputEl.value} ${card.units[1]} = ${conversion.toFixed(5)} ${card.units[0]}`;
  conversionsEl.append(lineEl);

  cardEl.append(titleEl);
  cardEl.append(conversionsEl);
  conversionCardsEl.append(cardEl);
}
