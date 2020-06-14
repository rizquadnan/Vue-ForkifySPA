<template>
  <div class="desc-wrapper" :style="{ paddingTop: padding }">
    <div class="recipe-general">
      <div class="recipe-general__recipe-duration">
        <div class="recipe-general__recipe-duration__img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
            />
          </svg>
        </div>
        <span class="recipe-general__recipe-duration__text"
          ><span class="nominal">{{ time }}</span> minutes</span
        >
      </div>
      <div class="recipe-general__recipe-portion">
        <div class="recipe-general__recipe-portion__img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
        <span class="recipe-general__recipe-portion__text"
          ><span class="nominal">{{ servings }} </span>servings</span
        >
        <div class="recipe-general__recipe-portion__buttons">
          <button class="add-btn" @click="addServings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
              />
            </svg>
          </button>
          <button class="substract-btn" @click="substractServings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="recipe-like empty" @click="ctrlLikeRecipe" v-if="!isLiked">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        />
      </svg>
    </div>
    <div class="recipe-like liked" @click="ctrlLikeRecipe" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../../main.js";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { cLikeRecipe } from "./../mixins/changeLike.js" 

export default {
  mixins: [cLikeRecipe],
  data() {
    return {
      servings: this.$store.state.recipe.servings,
      time: this.$store.state.recipe.time,
      isHuge: "",
      isSmall: "",
      padding: 0,
      isLiked: false
    };
  },
  computed: {
    ...mapGetters(["recipeServings"])
  },
  methods: {
    ...mapMutations(["updateServings"]),
    addServings() {
      this.updateServings("inc");
      this.servings = this.$store.state.recipe.servings;
      eventBus.$emit("servingsAdded");
    },
    substractServings() {
      this.updateServings("dec");
      this.servings = this.$store.state.recipe.servings;
      eventBus.$emit("servingsSubtracted");
    },
    checkHeadline() {
      eventBus.$on("headlineHeightChecked", topPadding => {
        this.padding = topPadding;
      });
    },
  },
  created() {
    // check headline element height to determine padding
    this.checkHeadline();

    // check whether recipe is liked or not
    this.checkIsLiked();
  }
};
</script>

<style scoped>
.desc-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.6rem 30px 2.5rem;
  background-color: #f9f5f3;
}

/* recipe general */
.recipe-general {
  display: flex;
}

.recipe-general__recipe-duration,
.recipe-general__recipe-portion {
  display: flex;
  align-items: center;
}

.recipe-general__recipe-duration__img,
.recipe-general__recipe-portion__img {
  width: 1.2rem;
  fill: #f49982;
  margin-right: 0.4rem;
}

.recipe-general__recipe-duration__text,
.recipe-general__recipe-portion__text {
  display: block;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.nominal {
  font-weight: 600;
}

.recipe-general__recipe-portion {
  margin-left: 1.8rem;
}

.recipe-general__recipe-portion__buttons {
  margin-left: 1rem;
  visibility: hidden;
  opacity: 0;
  transition: visibility 350ms, opacity 350ms;
}

.desc-wrapper:hover .recipe-general__recipe-portion__buttons,
.recipe-general__recipe-portion__buttons:hover {
  visibility: visible;
  opacity: 1;
}

.add-btn,
.substract-btn {
  border: none;
  background: none;
  fill: #fa6635;
}

.add-btn svg,
.substract-btn svg {
  width: 1rem;
  cursor: pointer;
  transition: transform 350ms;
}

.add-btn svg:hover,
.substract-btn svg:hover {
  transform: translateY(-3px);
}

/* recipe like */
.recipe-like {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  padding: 0.6rem;
  fill: #fff;
  background-color: #fb6736;
  cursor: pointer;
  display: none;
  transition: transform 350ms, box-shadow 350ms, visibility 350ms, opacity 350ms;
}

.recipe-like:hover {
  transform: scale(1.2);
}

@media screen and (min-width: 389px) {
  .recipe-like {
    display: block;
  }
}
</style>
