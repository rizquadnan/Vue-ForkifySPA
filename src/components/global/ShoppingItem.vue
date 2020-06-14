<template>
  <li class="shop-item-wrapper">
    <div class="shop-list__item__count">
      <input
        type="number"
        class="shop-list__item__count__inp"
        v-model.number="ingredient.count"
        step="0.01"
      />
      <span class="shop-list__item__count__type">{{ ingredient.unit }}</span>
    </div>
    <span class="shop-list__item__desc">{{ ingredient.ingredient }}</span>
    <button class="shop-list__item__button" @click="deleteIngredient">
      <svg viewBox="0 0 20 20">
        <path
          d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM14.789 13.061l-1.729 1.729-3.060-3.061-3.061 3.060-1.729-1.729 3.062-3.060-3.061-3.061 1.729-1.728 3.060 3.060 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z"
        ></path>
      </svg>
    </button>
  </li>
</template>

<script>
import { eventBus } from './../../main.js';

export default {
  props: {
    ingredient: Object
  },
  methods: {
    deleteIngredient() {
      eventBus.$emit('deleteButtonClicked', this.ingredient.id);
    }
  },
};
</script>

<style scoped>
.shop-item-wrapper {
  /* display: flex;
  justify-content: space-between;
  align-items: start; */
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: start;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: default;
}

.shop-list__item__count {
  border: 1px solid #f2efee;
  width: 6rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 30px;
}

.shop-list__item__count__inp {
  border: none;
  width: 3rem;
  margin-right: 0.4rem;
}

.shop-list__item__desc {
  width: 80%;
}

.shop-list__item__button {
  background-color: #fff;
  margin-top: 10px;
  border: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity 350ms, visibility 350ms;
}

.shop-list__item__button svg {
  fill: #f59a83;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  transition: transform 350ms;
}

.shop-list__item__button svg:hover {
  transform: translateY(-4px);
}

.shop-item-wrapper:hover .shop-list__item__button {
  visibility: visible;
  opacity: 1;
}

@media screen and (min-width: 1100) {
  
}
</style>
