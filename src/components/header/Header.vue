<template>
  <div class="header-wrapper">
    <a href="index.html"
      ><img class="logo" src="../../assets/logo.png" alt="forkify logo"
    /></a>
    <form class="search-nav">
      <input
        class="search-nav__search-bar"
        type="text"
        id="search-bar"
        placeholder="Search food"
        v-model="searchQuery"
      />
      <button class="search-nav__button" @click.prevent="ctrRequestQuery">
        <svg class="search-nav__button__icon" viewBox="0 0 20 20">
          <path
            d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"
          ></path>
        </svg>
      </button>
    </form>
    <div class="user_menu">
      <div class="likes" v-show="isLiked">
        <svg class="likes__icon" viewBox="0 0 20 20">
          <path
            d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"
          ></path>
        </svg>
        <div class="likes__panel">
          <ul class="likes__panel__likes-list">
            <like-item
              class="likes__panel__likes-list__items"
              v-for="recipe in recipeList"
              :recipe="recipe"
              :key="recipe.id"
            ></like-item>
          </ul>
        </div>
      </div>
      <div class="shop-list">
        <svg
          class="shop-list__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
        <shopping-list class="shops-panel"></shopping-list>
      </div>
    </div>
  </div>
</template>

<script>
import Like from "./Like.vue";
import Query from "../../models/Query.js";
import { mapMutations } from "vuex";
import { eventBus } from "./../../main.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
      recipeList: [],
      isLiked: false,
    };
  },
  computed: {
    ...mapGetters([
      "recipeGetted",
      "stateRecipe",
      "stateLikes",
      "stateRecipeLiked"
    ])
  },
  methods: {
    ...mapMutations([
      "toggleSpinner",
      "toggleSearch",
      "toggleRecipeGetted",
      "toggleMobileHideSearch",
      "toggleMobileHideRecipe",
      "toggleStateRecipeLiked"
    ]),
    async ctrRequestQuery() {
      // get query from view
      this.$store.state.query = {};
      this.$store.state.query = new Query(this.searchQuery);
      // prepare UI for rendering request API
      if (screen.width < 800 && this.recipeGetted === true) {
        this.toggleMobileHideSearch(false);
        this.toggleMobileHideRecipe(true);
      }

      this.searchQuery = "";
      this.toggleSpinner({ type: "search", condition: true });
      this.toggleSearch(false);
      eventBus.$emit("newSearch");

      try {
        // request API with query and store request results in internal data structure
        await this.$store.state.query.requestQuery();

        // render results to UI
        if (this.$store.state.query.results) {
          this.toggleSpinner({ type: "search", condition: false });
          this.toggleSearch(true);
          eventBus.$emit("searchSuccess");
        } else {
          this.toggleSpinner({ type: "search", condition: false });
          alert("Something went wrong. Please try to search a different queue");
        }
      } catch (error) {
        this.toggleSpinner({ type: "search", condition: false });
        alert("Something went wrong. Please try to search a different queue");
      }
    },
    addRecipeToLikes() {
      eventBus.$on("recipeLiked", () => {
        // add current recipe if list likes is empty
        if (this.stateLikes.likeList.length === 0) {
          // show likes icon if first time added
          this.isLiked = this.stateRecipeLiked;

          this.stateLikes.likeList.push(this.stateRecipe);
        } else {
          // add current recipe if not found on likes
          const idx = this.stateLikes.likeList.findIndex(
            el => el.id === this.stateRecipe.id
          );
          if (idx === -1) {
            this.stateLikes.likeList.push(this.stateRecipe);
          }
        }
        // add state vuex likes to local component likes
        this.recipeList = this.stateLikes.likeList;
      });
    },
    dislikeRecipe() {
      eventBus.$on("recipeDisliked", () => {
        // delete item
        const idx = this.stateLikes.likeList.findIndex(
          el => el.id === this.stateRecipe.id
        );
        this.stateLikes.likeList.splice(idx, 1);

        // render item in view
        this.recipeList = this.stateLikes.likeList;

        // remove like icon if there is no likes
        if (this.recipeList.length === 0) {
          this.toggleStateRecipeLiked(false);
          this.isLiked = this.stateRecipeLiked;
        }
      });
    }
  },
  components: {
    likeItem: Like
  },
  created() {
    // add current recipe to likes
    this.addRecipeToLikes();
  },
  mounted() {
    // dislike current recipe
    this.dislikeRecipe();
  }
};
</script>

<style scoped>
.header-wrapper {
  display: grid;
  grid-template-columns: auto 1fr 32px;
  background-color: #f9f5f3;
  padding: 1.2rem 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  justify-items: center;
  align-items: center;
}

a {
  display: flex;
  align-items: center;
}

.logo {
  height: 1.6rem;
}

/* search */
.search-nav {
  display: flex;
  position: relative;
  transition: transform 350ms, box-shadow 350ms;
}

.search-nav:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
}

.search-nav__search-bar {
  background-color: #fff;
  width: 40vw;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
}

.search-nav__button {
  position: relative;
  height: 30px;
  right: 40px;
  padding: 0 10px 0 30px;
  border-radius: 0 20px 20px 0;
  border: none;
  overflow: hidden;
  color: #ffffff;
  margin-right: -20px;
  cursor: pointer;
  background: linear-gradient(to right bottom, #fbdb89, #f48982);
}

.search-nav__button:placeholder {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  opacity: 0.2;
}
::-moz-placeholder {
  /* Firefox 19+ */
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  opacity: 0.2;
}
:-ms-input-placeholder {
  /* IE 10+ */
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  opacity: 0.2;
}
:-moz-placeholder {
  /* Firefox 18- */
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  opacity: 0.2;
}

.search-nav__button:before {
  position: absolute;
  content: "";
  left: 5%;
  transform: translate(-50%, -50%);
  top: 50%;
  border-radius: 50%;
  width: 80%;
  height: 100%;
  background-color: #fff;
  z-index: 0;
  cursor: default;
}

.search-nav__button__icon {
  margin: 0 auto;
  display: block;
  fill: currentColor;
  color: #fff;
  height: 1rem;
  width: 1rem;
}

.user_menu {
  display: flex;
}

/* likes */
.likes {
  fill: #f59a83;
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
  transition: transform 200ms;
  position: relative;
}

.likes__panel {
  position: absolute;
  top: 30px;
  left: -190px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 500ms, visibility 500ms;
}

.likes__panel:hover,
.likes:hover .likes__panel {
  visibility: visible;
  opacity: 1;
}

/* shopping list */
.shop-list {
  fill: #f59a83;
  height: 1.3rem;
  width: 1.3rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 200ms;
  position: relative;
  z-index: 1;
}

.shops-panel {
  position: absolute;
  z-index: 100;
  top: 30px;
  left: -385px;
  background-color: #fff;
  width: 25rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
  visibility: hidden;
  opacity: 0;
  transition: visibility 350ms, opacity 350ms;
}

@media screen and (max-width: 481px) {
  .search-nav {
    width: 90%;
  }

  .search-nav__search-bar {
    width: 75%;
  }
}

@media screen and (max-width: 360px) {
  .header-wrapper {
    grid-template-columns: auto 1fr;
    gap: 0.6rem 0;
    padding-bottom: 0.8rem;
  }

  .user_menu {
    grid-column: 1 / -1;
    justify-self: end;
  }

  .search-nav {
    width: 100%;
    justify-self: end;
    left: 23%;
    transform: translateX(-14%);
  }

  .search-nav__search-bar {
    width: 76%;
  }

  .search-nav:focus-within {
    transform: none;
  }
}
</style>
