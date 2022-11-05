/* Get DOM Elements */
// grab dropdowns
const dropdownClimate = document.getElementById('climate-dropdown');
const dropdownArchitecture = document.getElementById('architecture-dropdown');
const dropdownFood = document.getElementById('food-dropdown');

// grab images
const climateImg = document.getElementById('climateImage');
const architectureImg = document.getElementById('architectureImage');
const foodImg = document.getElementById('foodImage');

// grab slogan section elements
const sloganInput = document.getElementById('slogan-text');
const inputButton = document.getElementById('submit');
const sloganList = document.getElementById('slogan-display');

// grab stat elements
const climateElement = document.getElementById('climate-stat');
const archElement = document.getElementById('arch-stat');
const foodElement = document.getElementById('cuisine-stat');
const sloganElement = document.getElementById('slogan-stat');

/* State */

let slogans = [];

let climateCounter = 0;
let architectureCounter = 0;
let foodCounter = 0;
let sloganCounter = 0;

/* Events */

dropdownClimate.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}-climate.png`;
    climateCounter++;
    displayStats();
});

dropdownArchitecture.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}-architecture.png`;
    architectureCounter++;
    displayStats();
});

dropdownFood.addEventListener('change', (e) => {
    const value = e.target.value;
    foodImg.src = `./assets/${value}-food.png`;
    foodCounter++;
    displayStats();
});

inputButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    displaySlogans();
    sloganInput.value = '';
    sloganCounter++;
    displayStats();
});

/* Display Functions */
function displaySlogans() {
    sloganList.textContent = '';
    for (let slogan of slogans) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}

function displayStats() {
    climateElement.textContent = climateCounter;
    archElement.textContent = architectureCounter;
    foodElement.textContent = foodCounter;
    sloganElement.textContent = sloganCounter;
}

// (don't forget to call any display functions you want to run on page load!)
