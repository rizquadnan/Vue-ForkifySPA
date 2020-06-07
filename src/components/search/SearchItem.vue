<template>
  <li class="search-results__item">
    <img
      class="search-results__item__img"
      src="../../assets/test-2.jpg"
      alt=""
    />
    <div class="search-results__text">
      <span class="search-results__title">Best pizza dough</span>
      <span class="search-results__author">101 cookbooks</span>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
  .search-results__item {
    display: flex;
    padding: 2rem 2.5rem;
    align-items: center;
    transition: transform 400ms;
    cursor: pointer;
  }

  .search-results__item:hover {
    background-color: #f9f5f3;
    transform: translateY(-2px);
  }

  .search-results__item__img {
    display: block;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
  }

  .search-results__text {
    margin-left: 2rem;
    text-transform: uppercase;
    font-size: 1rem;
  }

  .search-results__text * {
    display: block;
  }

  .search-results__title {
    color: #fb6742;
    margin-bottom: 5px;
    font-weight: 600;
  }

  .search-results__author {
    font-size: 0.7rem;
    opacity: 0.5;
  }
</style>
