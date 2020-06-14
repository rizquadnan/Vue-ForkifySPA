import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    query : {},
    recipe: {},
    shopList: {},
    renderedShopList: [],
    likes: {},
    isSearching: false,
    searchSuccess: false,
    mobileHideSearch: false,
    isGettingRecipe: false,
    recipeGetted: false,
    mobileHideRecipe: false,
    isShoppingListed: false,
    recipeLiked: false
  },
  getters: {
    isSearching: state => {
      return state.isSearching;
    },
    isGettingRecipe: state => {
      return state.isGettingRecipe;
    },
    isShoppingListed: state => {
      return state.isShoppingListed;
    },
    searchSuccess: state => {
      return state.searchSuccess;
    },
    recipeGetted: state => {
      return state.recipeGetted;
    },
    mobileHideSearch: state => {
      return state.mobileHideSearch;
    },
    mobileHideRecipe: state => {
      return state.mobileHideRecipe;
    },
    stateRecipe: state => {
      return state.recipe;
    },
    stateLikes: state => {
      return state.likes;
    },
    stateRecipeLiked: state => {
      return state.recipeLiked;
    },
    stateShopList: state => {
      return state.shopList;
    }
  },
  mutations: {
    toggleSpinner: (state, n) => {
      if (n.type === "search") {
        state.isSearching = n.condition;
      } else if (n.type === "recipe") {
        state.isGettingRecipe = n.condition;
      }
    },
    toggleSearch: (state, condition) => {
      state.searchSuccess = condition;
    },
    toggleMobileHideSearch: (state, condition) => {
      state.mobileHideSearch = condition;
    },
    toggleIsGettingRecipe: (state, condition) => {
      state.isGettingRecipe = condition;
    },
    toggleRecipeGetted: (state, condition) => {
      state.recipeGetted = condition;
    },
    toggleMobileHideRecipe: (state, condition) => {
      state.mobileHideRecipe = condition;
    },
    toggleShoppingListed: (state, condition) => {
      state.isShoppingListed = condition;
    },
    updateServings: (state, type) => {
      const newServings = type === 'dec' ? state.recipe.servings - 1 : state.recipe.servings + 1;

      // ingredients
      state.recipe.ingredients.forEach(ing => {
        ing.count *= (newServings / state.recipe.servings);
      });

      state.recipe.servings = newServings;
    },
    createLikes: (state, likes) => {
      state.likes = likes;
    },
    toggleStateRecipeLiked: (state, condition) => {
      state.recipeLiked = condition;
    },
    createShopList: (state, shopList) => {
      state.shopList = shopList;
    },
    deleteShopListItem: (state, id) => {
      state.shopList.shopList = state.shopList.shopList.filter(el => el.id !== id);
    }
  }
});