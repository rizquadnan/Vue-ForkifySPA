import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async requestRecipe() {
    try {
      const recipeData = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.author = recipeData.data.recipe.publisher;
      this.ingredients = recipeData.data.recipe.ingredients;
      this.recipeSource = recipeData.data.recipe.source_url;
      this.imgSource = recipeData.data.recipe.image_url;
      this.title = recipeData.data.recipe.title;
    } catch (error) {
      console.log(error);
    }
  }

  calcTime() {
    // Assuming that every 3 ingredients
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }

  displayLimitedDecimal(number, numDecimal) {
    // display only 2 decimals
    if (number % 1 !== 0) {
      number = number.toFixed(numDecimal);
    }
    return number;
  }

  parseIngredients() {
    const unitsLong = [
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds"
    ];
    const unitsShort = [
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound"
    ];
    const units = [...unitsShort, "kg", "g"];

    const newIngredients = this.ingredients.map(el => {
      // normalize ingredients
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      // remove elements starting with "("
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // mark the nominal, the ingredient and the type
      const arrIng = ingredient.split(" ");
      const typeIndex = arrIng.findIndex(el2 => units.includes(el2));

      let objIng;
      if (typeIndex > -1) {
        // there is a type
        const arrCount = arrIng.slice(0, typeIndex);
        
        let count;
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, typeIndex).join("+"));
        }
        
        // display only 2 decimals
        count = this.displayLimitedDecimal(count, 2);
        objIng = {
          count,
          unit: arrIng[typeIndex],
          ingredient: arrIng.slice(typeIndex + 1).join(" ")
        };
      } else if (parseInt(arrIng[0], 10)) {
        // there is no type, but 1st element is a number
        const count = this.displayLimitedDecimal(parseInt(arrIng[0], 10), 2);

        objIng = {
          count,
          unit: "",
          ingredient: arrIng.slice(1).join(" ")
        };
      } else if (typeIndex === -1) {
        // there is no type

        objIng = {
          count: 1,
          unit: "",
          ingredient
        };
      }

      return objIng;
    });

    this.ingredients = newIngredients;
  }

  // updateServings(type) {
  //   // servings
  //   const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

  //   // ingredients
  //   this.ingredients.forEach(ing => {
  //     ing.count *= (newServings / this.servings);
  //   });

  //   this.servings = newServings;
  // }
}
