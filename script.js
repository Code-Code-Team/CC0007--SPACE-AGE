const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('p');
const spaceAgeElement = document.querySelector('#space');
const selectElement = document.querySelector('#Planets');
const selectedOption = selectElement.options[selectElement.selectedIndex];

let age

function convertToEarthYears(val, planet) {
  console.log('convertToEarthYears -> val', val);
  console.log('convertToEarthYears -> planet', planet);
  const earthYear = val / 31557600;
  console.log("convertToEarthYears -> earthYear", earthYear)

  switch (planet) {
    case 'Mercury':
      age = earthYear*0.2408467;
      break
    case 'Venus':
      age = earthYear*0.61519726;
      break
    case 'Earth':
      age = earthYear;
      break
    case 'Mars':
      age = earthYear*1.8808158;
      break
    case 'Jupiter':
      age = earthYear*11.862615;
      break
    case 'Saturn':
      age = earthYear*29.447498;
      break
    case 'Uranus':
      age = earthYear*84.016846;
      break
    case 'Neptune':
      age = earthYear*164.79132;
      break
    }
    return age;
}

buttonElement.addEventListener('click', () => {
  const inputVal = inputElement.value;
  const selectedOption =  
    selectElement.options[selectElement.selectedIndex].text;
  resultElement.innerText = "Your age " + convertToEarthYears(inputVal, selectedOption).toFixed(2)+ " year" 
  spaceAgeElement.innerText = "In "+selectedOption;;
  
});

/* Given an age in seconds, calculate how old someone would be on:
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years

So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old. */
