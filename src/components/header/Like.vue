<template>
  <div class="like-wrapper">
    <img class="likes__panel__img" src="../../assets/test-1.jpg" alt="" />
    <div class="likes__panel__text">
      <span class="likes__panel__title">Best pizza dough</span>
      <span class="likes__panel__author">101 cookbooks</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .like-wrapper {
    display: flex;
    border-bottom: 1px solid #f2efee;
    padding: 1.5rem 2rem;
    transition: background-color 350ms;
    z-index: 10;
  }

  .like-wrapper:hover {
    background-color: #f9f5f3;
  }

  .likes__panel__img {
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  }

.likes__panel__text {
  margin-left: 1.5rem;
  text-transform: uppercase;
  font-size: 0.6rem;
}

.likes__panel__text * {
  display: block;
}

.likes__panel__title {
  color: #f59a83;
  margin-bottom: 5px;
  font-weight: 600;
}
</style>
