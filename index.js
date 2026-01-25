let conversionDefaultValue = 0;
const valueInputEl = document.getElementById("valueInput");
const convertBtnEl = document.getElementById("convertBtn");

document.addEventListener("DOMContentLoaded", () => {
  valueInputEl.value =
    JSON.parse(localStorage.getItem("inputValue")) ?? conversionDefaultValue;

  lengthConversions(Number(valueInputEl.value));
  volumeConversions(Number(valueInputEl.value));
  massConversions(Number(valueInputEl.value));
});

//save input value to local storage

convertBtnEl.addEventListener("click", () => {
  localStorage.setItem("inputValue", valueInputEl.value);

  lengthConversions(Number(valueInputEl.value));

  volumeConversions(Number(valueInputEl.value));

  massConversions(Number(valueInputEl.value));
});

//this function sets the length values and the conversions elements
function lengthConversions(inputValue) {
  //length document variables
  const lengthMetersValueEl = document.getElementById("lengthMetersValue");
  const lengthFeetValueEl = document.getElementById("lengthFeetValue");
  const lenghtFeetConversionValueEl = document.getElementById(
    "lenghtFeetConversionValue",
  );
  const lengthMetersConversionValueEl = document.getElementById(
    "lengthMetersConversionValue",
  );

  //set the length document values
  lengthMetersValueEl.textContent = inputValue;
  lengthFeetValueEl.textContent = inputValue;

  //fetch the text values then convert them to numbers
  let lengthMetersValue = inputValue;
  let lengthFeetValue = inputValue;
  let conversionValue = 3.281;

  let lenghtFeetConversionValue = lengthMetersValue * conversionValue;
  let lengthMetersConversionValue = lengthFeetValue / conversionValue;

  lenghtFeetConversionValueEl.textContent =
    lenghtFeetConversionValue.toFixed(4);
  lengthMetersConversionValueEl.textContent =
    lengthMetersConversionValue.toFixed(4);
}

//this function sets the volume values and the conversions elements
function volumeConversions(inputValue) {
  //volume document variables
  const volumeLitersValueEl = document.getElementById("volumeLitersValue");
  const volumeGallonsValueEl = document.getElementById("volumeGallonsValue");
  const volumeGallonsConversionValueEl = document.getElementById(
    "volumeGallonsConversionValue",
  );
  const volumelitersConversionValueEl = document.getElementById(
    "volumelitersConversionValue",
  );

  //set the volume document values
  volumeLitersValueEl.textContent = inputValue;
  volumeGallonsValueEl.textContent = inputValue;

  let conversionValue = 3.785;

  //do the conversions
  let volumeGallonsConversionValue = inputValue / conversionValue;
  let volumelitersConversionValue = inputValue * conversionValue;

  volumeGallonsConversionValueEl.textContent =
    volumeGallonsConversionValue.toFixed(4);
  volumelitersConversionValueEl.textContent =
    volumelitersConversionValue.toFixed(4);
}

//sets the mass values and the conversions
function massConversions(inputValue) {
  //define the document mass elements
  const massKilosValueEl = document.getElementById("massKilosValue");
  const massPoundsValueEl = document.getElementById("massPoundsValue");
  const massPoundsConversionValueEl = document.getElementById(
    "massPoundsConversionValue",
  );
  const massKilosConversionValueEl = document.getElementById(
    "massKilosConversionValue",
  );

  //set the mass document values
  massKilosValueEl.textContent = inputValue;
  massPoundsValueEl.textContent = inputValue;

  let conversionValue = 2.205;

  //do the conversions
  let massPoundsConversionValue = inputValue * conversionValue;
  let massKilosConversionValue = inputValue / conversionValue;

  //set the conversion values
  massPoundsConversionValueEl.textContent =
    massPoundsConversionValue.toFixed(4);
  massKilosConversionValueEl.textContent = massKilosConversionValue.toFixed(4);
}
