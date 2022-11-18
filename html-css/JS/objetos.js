recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    "azúcar": "30 gramos",
}

//console.log(recipe);



recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "30 gramos",
}

/* for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
        console.log("Agrega " + recipe[key] + " de " + key);
    }
}
 */




recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    azúcar: "30 gramos",
    mixIngredients: function () {
        return "Mezclando los ingredientes ..."
    },
}



console.log(recipe.mixIngredients());