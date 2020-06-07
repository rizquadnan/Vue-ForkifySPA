<template>
  <div class="ingre-wrapper">
    <ul class="ingredients-list">
      <ingredients-item v-for="item in 8" :key="item"></ingredients-item>
    </ul>
    <button class="add-ingredients-btn btn">
      <svg class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
        />
      </svg>
      <span class="content">Add To Shopping list</span>
    </button>
  </div>
</template>

<script>
import RecipeIngredientsItem from "./RecipeIngredientsItem.vue";
export default {
  components: {
    ingredientsItem: RecipeIngredientsItem
  }
};
</script>

<style scoped>
.ingre-wrapper {
  background-color: #f2efee;
  padding: 2.5rem 0 2rem 0;
}

.ingredients-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2.3rem;
  padding: 0 3rem 2.5rem 3rem;
}

.add-ingredients-btn {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fb6736;
  border: none;
  padding: 0.6rem;
  border-radius: 30px;
  color: #f2efee;
  cursor: pointer;
  transition: transform 350ms, box-shadow 350ms;
  box-shadow: 0 0.8rem 1.5rem rgba(101, 90, 86, 0.3)
}

.add-ingredients-btn:hover {
  transform: scale(1.1);
}

.icon {
  width: 1.3rem;
  fill: currentColor;
  margin-right: 0.6rem;
}

.content {
  text-transform: uppercase;
}

@media screen and (max-width: 370px) {
  .ingredients-list {
    grid-template-columns: 1fr;
    padding: 0 4rem 2.5rem 4rem;
  }
}

</style>
