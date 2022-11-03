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

/* State */

let slogans = [];

let climateCounter = 0;
let architectureCounter = 0;
let foodCounter = 0;

/* Events */

dropdownClimate.addEventListener('change', (e) => {
    const value = e.target.value;
    climateImg.src = `./assets/${value}-climate.png`;
    climateCounter++;
});

dropdownArchitecture.addEventListener('change', (e) => {
    const value = e.target.value;
    architectureImg.src = `./assets/${value}-architecture.png`;
    architectureCounter++;
});

dropdownFood.addEventListener('change', (e) => {
    const value = e.target.value;
    foodImg.src = `./assets/${value}-food.png`;
    foodCounter++;
});

inputButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    displaySlogans();
    sloganInput.value = '';
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

// (don't forget to call any display functions you want to run on page load!)
