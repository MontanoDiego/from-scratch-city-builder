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
const sloganInput = document.getElementsBy('slogan-text');
const inputButton = document.getElementById('submit');
const sloganList = document.getElementById('slogan-display');

/* State */

let slogans = [];

let climateCounter = 0;
let architectureCounter = 0;
let foodCounter = 0;

/* Events */


/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
