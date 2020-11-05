const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('p');
const spaceAgeElement = document.querySelector('#space');
const selectElement = document.querySelector('#Earths');
const selectedOption = selectElement.options[selectElement.selectedIndex];

const dayConst = 365.25;
const secConst = 31557600;
let age = 1

function convertToEarthYears(val, planet) {
  console.log('convertToEarthYears -> planet', planet);
  console.log('convertToEarthYears -> val', val);
  const earthYear = val / 31557600;

  switch (selectedOption) {
    case 'Mercury':
      age = earthYear;
      break
    case 'Venus':
      age = earthYear/2;
      break
    return age;
  }
}

buttonElement.addEventListener('click', () => {
  const inputVal = inputElement.value;
  const selectedOption =
    selectElement.options[selectElement.selectedIndex].text;
  resultElement.innerText = convertToEarthYears(inputVal, selectedOption);
  spaceAgeElement.innerText = selectedOption;
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
