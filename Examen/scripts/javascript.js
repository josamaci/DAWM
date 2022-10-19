let cargarDatos = () => {
    fetch('data/IndianFoodDatasetCSV2.json')
        .then(response => response.json())
        .then(data => {
            for (let recipe of data) {
                if (recipe.Srno == 1) {
                    let h1format = `<a href="${recipe.URL}">${recipe.TranslatedRecipeName}</a>`
                    document.querySelector("h1").innerHTML += h1format
                    let Cuisine = recipe.Cuisine
                    document.getElementById("a1").innerHTML += Cuisine
                    let Course = recipe.Course
                    document.getElementById("a2").innerHTML += Course
                    let Diet = recipe.Diet
                    document.getElementById("a3").innerHTML += Diet
                    let PrepTimeInMins = `<p>${recipe.PrepTimeInMins}'</p>`
                    document.querySelector(".tiempop").innerHTML += PrepTimeInMins
                    let CookTimeInMins = `<p>${recipe.CookTimeInMins}'</p>`
                    document.querySelector(".tiempoc").innerHTML += CookTimeInMins
                    let TotalTimeInMins = `<p>${recipe.TotalTimeInMins}'</p>`
                    document.querySelector(".tiempot").innerHTML += TotalTimeInMins
                    let TranslatedIngredients = recipe.TranslatedIngredients
                    let Ingredients = TranslatedIngredients.split(",")
                    for (let i in Ingredients) {
                        console.log(i)
                        IngredientsFormat = `
                            <input type="checkbox" name="ig${i}">
                            <label for="ig${i}">${Ingredients[i]}</label><br>`
                        document.querySelector("form").innerHTML += IngredientsFormat
                    }
                    let TranslatedInstructions = recipe.TranslatedInstructions
                    document.querySelector(".instruccionestext").innerHTML += TranslatedInstructions

                }
            }
        })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});