<template>
  <div class="recipe-wrapper" :class="{loaded: recipeGetted}">
    <ajax-spinner v-if="isGettingRecipe"></ajax-spinner>
    <div v-if="recipeGetted">
      <recipe-hero :title="$store.state.recipe.title" :img="$store.state.recipe.imgSource"></recipe-hero>
      <recipe-desc></recipe-desc>
      <recipe-ingre :ingredients="$store.state.recipe.ingredients"></recipe-ingre>
      <recipe-direct :link="$store.state.recipe.recipeSource"></recipe-direct>
    </div>
  </div>
</template>
// :time="$store.state.recipe.time" :portion="$store.state.recipe.servings"

<script>
import RecipeHero from './RecipeHero.vue'
import RecipeDescription from './RecipeDescription.vue'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeDirections from './RecipeDirections.vue'
import {eventBus} from './../../main.js'
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'toggleIsGettingRecipe',
      'toggleRecipeGetted'
    ])
  },
  components: {
    recipeHero: RecipeHero,
    recipeDesc: RecipeDescription,
    recipeIngre: RecipeIngredients,
    recipeDirect: RecipeDirections
  },
  computed: {
    ...mapGetters([
      'isGettingRecipe',
      'recipeGetted'
    ]),
  },
  created () {
    eventBus.$on('recipeGetted', () => {
    // prepare data from internal data structure for rendering
    // 1. calculate cooking time and portion size
    this.$store.state.recipe.calcTime();
    this.$store.state.recipe.calcServings();

    // 2. parse ingredients for proper display
    this.$store.state.recipe.parseIngredients();

    // render the data
    // 1. remove ajax spinner
    this.toggleIsGettingRecipe(false);    

    // 2. render
    this.toggleRecipeGetted(true);

    }); 
  }
}
</script>

<style scoped>
  .loaded {
    background-color: #f9f5f3;
  }
</style>