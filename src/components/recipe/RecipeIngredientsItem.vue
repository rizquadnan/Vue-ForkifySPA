<template>
  <li class="ingre-list-wrappper">
    <svg
      class="check-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
    <span class="nominal">{{nominal}}</span>
    <span class="type"
      >{{ingObj.unit}}
    </span>
    <span class="ingredient">{{ingObj.ingredient}}</span> 
  </li>
</template>

<script>
import { eventBus } from './../../main.js';

export default {
  data() {
    return {
      nominal: this.ingObj.count
    }
  },
  props: {
    ingObj: Object,
    index: Number
  },
  created() {
    eventBus.$on('servingsAdded', () => {
      this.nominal = this.$store.state.recipe.ingredients[this.index].count;
    });

    eventBus.$on('servingsSubtracted', () => {
      this.nominal = this.$store.state.recipe.ingredients[this.index].count;
    });
  }
};
</script>

<style scoped>
  .ingre-list-wrappper {
    display: grid;
    grid-template-columns: auto auto auto 1fr;
    gap: 0 0.25rem;
  }

  .check-icon,
  .nominal,
  .type,
  .ingredient {
    display: block;
  }

  .nominal,
  .type,
  .ingredient {
    font-weight: 300;
    font-size: 0.9rem;
  }

  .check-icon {
    fill: #f19881;
    width: 1.2rem;
  }
</style>
