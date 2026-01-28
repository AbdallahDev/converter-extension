const inputValueEl = document.getElementById("valueInput");
const convertBtnEl = document.getElementById("convertBtn");
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

document.addEventListener("DOMContentLoaded", () => {
  inputValueEl.value = JSON.parse(localStorage.getItem("inputValue")) || 0;
  renderingCards(inputValueEl.value);
});

convertBtnEl.addEventListener("click", () => {
  localStorage.setItem("inputValue", inputValueEl.value);
  renderingCards(inputValueEl.value);
});

//creates the conversions cards
function renderingCards(inputValue) {
  conversionCardsEl.replaceChildren();

  for (const card of cardDetails) {
    //creating the card
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    const titleEl = document.createElement("div");
    titleEl.classList.add("cardTitle");
    titleEl.textContent = `${card["name"]} (${
      card["units"][0].charAt(0).toUpperCase() + card["units"][0].slice(1)
    }/${card["units"][1].charAt(0).toUpperCase() + card["units"][1].slice(1)})`;
    const conversionsEl = document.createElement("conversions");

    //create conversion lines
    for (let i = 0; i < 2; i++) {
      let lineEl = document.createElement("div");
      lineEl.classList.add("cardLine");
      let conversion = inputValue * card.factors[i];
      let secondUnit = card.units[i + 1];
      if (i == 1) secondUnit = card.units[0];
      lineEl.textContent = `${inputValue} ${card.units[i]} = ${conversion.toFixed(3)} ${secondUnit}`;
      conversionsEl.append(lineEl);
    }

    cardEl.append(titleEl);
    cardEl.append(conversionsEl);
    conversionCardsEl.append(cardEl);
  }
}

function creatingConversionLines(conversionsEl) {}
