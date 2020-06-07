<template>
  <div class="recipe-wrapper">
    <recipe-hero></recipe-hero>
    <recipe-desc></recipe-desc>
    <recipe-ingre></recipe-ingre>
    <recipe-direct></recipe-direct>
  </div>
</template>

<script>
import RecipeHero from './RecipeHero.vue'
import RecipeDescription from './RecipeDescription.vue'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeDirections from './RecipeDirections.vue'

export default {
  components: {
    recipeHero: RecipeHero,
    recipeDesc: RecipeDescription,
    recipeIngre: RecipeIngredients,
    recipeDirect: RecipeDirections
  }
}
</script>

<style scoped>

</style>