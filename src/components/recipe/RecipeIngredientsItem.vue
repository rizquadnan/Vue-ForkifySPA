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
    <span class="nominal">4</span>
    <span class="type"
      >1/2 cup unbleached high-gluten, bread, or all-purpose flour, chilled
    </span>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
  .ingre-list-wrappper {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0 0.5rem;
  }

  .check-icon,
  .nominal,
  .type {
    display: block;
  }

  .nominal,
  .type {
    font-weight: 300;
    font-size: 0.9rem;
  }

  .check-icon {
    fill: #f19881;
    width: 1.2rem;
  }
</style>
