import { mapMutations } from 'vuex';
import { eventBus } from './../../main.js';
import Recipe from "./../../models/Recipe.js";

export const getRecipe = {
  methods: {
    ...mapMutations([
      'toggleRecipeGetted',
      'toggleMobileHideRecipe',
      'toggleIsGettingRecipe',
      'toggleMobileHideSearch'
    ]),
    async crtlGetRecipe () {
      // prepare UI for search
      // clear recipe page
      this.toggleRecipeGetted(false);
  
      // if device screen is below tablet size breakpoint then hide search results screen
      if (screen.width < 800) {
        this.toggleMobileHideSearch(true);
        this.toggleMobileHideRecipe(false);
      }
  
      // load ajax spinner for recipe request 
      this.toggleIsGettingRecipe(true);
  
      // request recipe
      this.$store.state.recipe = new Recipe(this.id);
  
      try {
        await this.$store.state.recipe.requestRecipe();
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please refresh page and select a recipe again");
      }
      eventBus.$emit('recipeGetted');
    }
  }
}