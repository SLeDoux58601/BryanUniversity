var countries = ["USA", "Canada", "Mexico", "France", "Great Britian", "Germany", "Spain", "Italy"];
var countriesList = countries.length;
for (i = 0; i < 8; i++) {
    var countriesList = document.createElement("h1")
    countriesList.innerHTML = countries[i]
    document.body.appendChild(countriesList)
    countriesList.style.fontSize = "20px"
    countriesList.style.fontWeight = "lighter"
    countriesList.style.fontFamily = "sans-serif"
    countriesList.style.color = "red"
    countriesList.classList.add("border")
}
