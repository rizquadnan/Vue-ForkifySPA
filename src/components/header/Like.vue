<template>
  <div class="like-wrapper" @click="crtlGetRecipe">
    <img class="likes__panel__img" :src="recipe.imgSource" :alt="recipe.title" />
    <div class="likes__panel__text">
      <span class="likes__panel__title">{{recipe.title}}</span>
      <span class="likes__panel__author">{{recipe.author}}</span>
    </div>
  </div>
</template>

<script>
import { getRecipe } from './../mixins/getRecipe.js';

export default {
  data() {
    return {
      id: this.recipe.id
    }
  },
  props: {
    recipe: Object
  },
  mixins: [getRecipe]
};
</script>

<style scoped>
  .like-wrapper {
    display: flex;
    border-bottom: 1px solid #f2efee;
    padding: 1.5rem;
    transition: background-color 350ms;
    z-index: 10;
  }

  .like-wrapper:hover {
    background-color: #f9f5f3;
  }

  .likes__panel__img {
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  }

.likes__panel__text {
  margin-left: 1.5rem;
  text-transform: uppercase;
  font-size: 0.6rem;
}

.likes__panel__text * {
  display: block;
}

.likes__panel__title {
  color: #f59a83;
  margin-bottom: 5px;
  font-weight: 600;
}
</style>
