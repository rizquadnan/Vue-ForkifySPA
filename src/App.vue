<template>
  <div id="app">
    <div class="main-wrapper">
      <app-header id="app-header"></app-header>
      <div class="second-wrapper">
        <app-search id="app-search"></app-search>
        <app-recipe id="app-recipe"></app-recipe>
        <shopping-list id="app-shop-list"></shopping-list>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Search from "./components/search/Search.vue";
import Recipe from "./components/recipe/Recipe.vue";

export default {
  name: "app",
  data() {
    return {
      isSearched: false
    };
  },
  components: {
    appHeader: Header,
    appSearch: Search,
    appRecipe: Recipe
  }
};
</script>

<style>
:focus {
  outline: none;
}

#app-search,
#app-recipe,
#app-shop-list {
  display: none;
  background-color: #fff;
}

@media screen and (min-width: 800px) {
  .second-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  #app-search,
  #app-recipe {
    display: block;
  }
}

@media screen and (min-width: 1100px) {
  .second-wrapper {
    grid-template-columns: auto 4fr 2fr;
  }

  /* adjust size on header elements*/
  #app-header .logo {
    width: 6rem;
  }
  
  #app-header .search-nav__search-bar {
    padding: 0.7rem;
  }

  #app-header .search-nav__button {
    height: 2.4rem;
  }

  #app-header .search-nav__button::before {
    top: 51%;
    transform: translate(-50%, -51%)
  }

  /* tweak likes panel position*/ 
  #app-header .likes__panel {
    left: -180px;
  }

  /* remove shopping list icon on header */
  #app-header {
    display: flex;
    justify-content: space-between;
  }

  #app-header .shop-list {
    display: none;
  }

  #app-header .likes{
    width: 2rem;
    height: 2rem;
  }

  /* tweak search results */
  #app-search .search-results__title {
    font-size: 0.8rem;
    color: #f59a83;
  }

  #app-search .search-results__item__img {
    width: 3rem;
    height: 3rem;
  }

  /* tweak shop results */
  #app-shop-list {
    display: block;
    padding: 1.8rem;
  }
}

@media screen and (min-width: 1200px) {
  .main-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
  }

  .second-wrapper {
    background-color: #fff;
    height: 100vh;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  #app-header .search-nav__search-bar {
    width: 400px;
  }

  #app-shop-list {
    border-bottom-right-radius: 0.5rem;
  }

  #app-search {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
