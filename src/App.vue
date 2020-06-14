<template>
  <div id="app">
    <div class="main-wrapper">
      <app-header id="app-header"></app-header>
      <div class="second-wrapper">
        <div class="app-search-wrapper" v-show="!mobileHideSearch">
          <app-search
            v-if="searchSuccess || isSearching"
            id="app-search"
          ></app-search>
        </div>
        <div class="app-recipe-wrapper" v-show="!mobileHideRecipe">
          <app-recipe
            v-if="recipeGetted || isGettingRecipe"
            id="app-recipe"
          ></app-recipe>
        </div>
        <shopping-list
          v-if="isShoppingListed"
          id="app-shop-list"
        ></shopping-list>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Search from "./components/search/Search.vue";
import Recipe from "./components/recipe/Recipe.vue";
import { mapGetters } from "vuex";
import { eventBus } from "./main.js";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "searchSuccess",
      "isSearching",
      "isGettingRecipe",
      "recipeGetted",
      "isShoppingListed",
      "mobileHideSearch",
      "mobileHideRecipe"
    ]),
    isEmpty() {
      // return true if all other child element is non existent
      return !(
        this.searchSuccess ||
        this.isSearching ||
        this.isGettingRecipe ||
        this.recipeGetted ||
        this.isShoppingListed
      );
    }
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
#app-shop-list {
  /* display: none; */
  background-color: #fff;
}

@media screen and (min-width: 800px) {
  .second-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  /* #app-search,
  #app-recipe {
    display: block;
  } */

  #app-recipe {
    grid-column: 2;
  }

  #app-search {
    grid-column: 1;
  }
}

@media screen and (min-width: 1100px) {
  .second-wrapper {
    grid-template-columns: 2fr 4fr 2fr;
  }

  #app-shop-list {
    grid-column: 3;
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
    transform: translate(-50%, -51%);
  }

  /* tweak likes panel position*/
  #app-header .likes__panel {
    left: -180px;
  }

  /* remove shopping list icon on header */
  /* #app-header {
    display: flex;
    justify-content: space-between;
  } */

  #app-header .shop-list {
    display: none;
  }

  #app-header .likes {
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
    min-height: 100vh;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  /* .empty {
    height: 100vh;
  } */

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
