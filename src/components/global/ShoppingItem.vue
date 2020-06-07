<template>
  <div class="shop-item-wrapper">
    <div class="shop-list__item__count">
      <input type="number" class="shop-list__item__count__inp" />
      <span class="shop-list__item__count__type">cup</span>
    </div>
    <span class="shop-list__item__desc"
      >unbleached high-gluten, bread, or all-purpose flour, chilled all-purpose
      flour</span
    >
    <button class="shop-list__item__button">
      <svg viewBox="0 0 20 20">
        <path
          d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM14.789 13.061l-1.729 1.729-3.060-3.061-3.061 3.060-1.729-1.729 3.062-3.060-3.061-3.061 1.729-1.728 3.060 3.060 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shop-item-wrapper {
  display: flex;
  align-items: start;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.shop-list__item__count {
  border: 1px solid #f2efee;
  width: 6.5rem;
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
}

.shop-item-wrapper:hover .shop-list__item__button {
  visibility: visible;
  opacity: 1;
}
</style>
