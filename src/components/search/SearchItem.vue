<template>
  <li class="search-results__item" @click="crtlGetRecipe">
    <img class="search-results__item__img" :src="imgSource" :alt="title" />
    <div class="search-results__text">
      <span class="search-results__title">{{ title }}</span>
      <span class="search-results__author">{{ author }}</span>
    </div>
  </li>
</template>

<script>
import { getRecipe } from "./../mixins/getRecipe.js";

export default {
  mixins: [getRecipe],
  props: {
    imgSource: String,
    title: String,
    author: String,
    id: String
  },
};
</script>

<style scoped>
.search-results__item {
  display: flex;
  padding: 2rem 2.5rem;
  align-items: center;
  transition: transform 400ms;
  cursor: pointer;
}

.search-results__item:hover {
  background-color: #f9f5f3;
  transform: translateY(-2px);
}

.search-results__item__img {
  display: block;
  min-width: 4.5rem;
  min-height: 4.5rem;
  max-width: 4.5rem;
  max-height: 4.5rem;
  border-radius: 50%;
}

.search-results__text {
  margin-left: 2rem;
  text-transform: uppercase;
  font-size: 1rem;
}

.search-results__text * {
  display: block;
}

.search-results__title {
  color: #f69a83;
  margin-bottom: 5px;
  font-weight: 600;
}

.search-results__author {
  font-size: 0.7rem;
  opacity: 0.5;
}

@media screen and (min-width: 1200px) {
  .search-results__item__img {
    min-width: 3.5rem;
    min-height: 3.5rem;
    max-width: 3.5rem;
    max-height: 3.5rem;
  }
}
</style>
