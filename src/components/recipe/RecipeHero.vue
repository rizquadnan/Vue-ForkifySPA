<template>
  <div class="hero-wrapper" :style="{ 'background-image': 'url(' + img + ')' }">
    <span class="hero-headline" ref="recipeHeadline">
      {{ title }}
    </span>
    <div class="recipe-like" v-if="!isLiked" @click="ctrlLikeRecipe">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        />
      </svg>
    </div>
    <div class="recipe-like liked" v-else @click="ctrlLikeRecipe">
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
import { cLikeRecipe } from './../mixins/changeLike.js';

export default {
  data() {
    return {
      isLiked: false
    };
  },
  mixins: [cLikeRecipe],
  props: {
    title: String,
    img: String
  },
  created() {
    this.checkIsLiked();
  },
  mounted() {
    // change recipe description top padding depending on headline height
    let topPadding = "";
    if (this.$refs["recipeHeadline"].getBoundingClientRect().height <= 139) {
      topPadding = "4rem";
    } else if (
      this.$refs["recipeHeadline"].getBoundingClientRect().height <= 175
    ) {
      topPadding = "7rem";
    } else {
      topPadding = "9rem";
    }
    eventBus.$emit("headlineHeightChecked", topPadding);
  }
};
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  display: flex;
  justify-content: end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 270px;
  padding: 1.2rem 1.6rem;
}

.hero-headline {
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-50%) skewY(-6deg);
  display: block;
  padding: 0.8rem 1.3rem;
  background-color: #fb7142;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 70%;
  line-height: 2.2rem;
  text-align: center;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.hero-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  opacity: 0.4;
}

/* recipe like */
.recipe-like {
  position: relative;
  z-index: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  padding: 0.6rem;
  fill: #fff;
  background-color: #fb6736;
  cursor: pointer;
  transition: transform 350ms;
}

.recipe-like:hover {
  transform: translateY(-3px);
}

@media screen and (min-width: 389px) {
  .recipe-like {
    display: none;
  }

  .recipe-general {
    width: 100%;
  }
}

@media screen and (max-width: 501px) {
  .hero-headline {
    top: 200px;
  }
}
</style>
