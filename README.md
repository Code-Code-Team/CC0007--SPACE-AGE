# Space Age function in Javascript

This study aims to develop algoritm skills.

## Description

- Given an age in seconds, calculate how old someone would be on:
  1. Mercury: orbital period 0.2408467 Earth years
  2. Venus: orbital period 0.61519726 Earth years
  3. Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
  4. Mars: orbital period 1.8808158 Earth years
  5. Jupiter: orbital period 11.862615 Earth years
  6. Saturn: orbital period 29.447498 Earth years
  7. Uranus: orbital period 84.016846 Earth years
  8. Neptune: orbital period 164.79132 Earth years

- So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old. 



### Function in Javascript
```javascript
let age;
function convertToPlanetYears(val, planet) {
  console.log('convertToEarthYears -> val', val);
  console.log('convertToEarthYears -> planet', planet);
  const earthYear = val / 31557600;
  console.log('convertToEarthYears -> earthYear', earthYear);

  switch (planet) {
    case 'Mercury':
      age = earthYear * 0.2408467;
      break;
    case 'Venus':
      age = earthYear * 0.61519726;
      break;
    case 'Earth':
      age = earthYear;
      break;
    case 'Mars':
      age = earthYear * 1.8808158;
      break;
    case 'Jupiter':
      age = earthYear * 11.862615;
      break;
    case 'Saturn':
      age = earthYear * 29.447498;
      break;
    case 'Uranus':
      age = earthYear * 84.016846;
      break;
    case 'Neptune':
      age = earthYear * 164.79132;
      break;
  }
  return age;
}
```
## Function in Python
```python
def convertToPlanetYears(val, planet):
    print("hello world", val)
    earthYear = val / 31557600
    print("earthYear", earthYear)

    if planet == "Mercury":
        age = earthYear*0.2408467
    elif planet == "Venüs":
        age = earthYear*0.61519726
    elif planet == "Earth":
        age = earthYear
    elif planet == "Mars":
        age = earthYear*1.8808158
    elif planet == "Jupiter":
        age = earthYear*11.862615
    elif planet == "Saturn":
        age = earthYear*29.447498
    elif planet == "Uranus":
        age = earthYear*84.016846
    elif planet == "Neptune":
        age = earthYear*164.79132
    txt = "Your Age is {:.2f} years in {}"
    return txt.format(age,planet)


print("age :",convertToPlanetYears(1000000000, "Mars"))
```

### Github Io to check it

@@ ![Calculate your Space Age ](https://code-code-team.github.io/CC0007--SPACE-AGE/) @@
