
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
