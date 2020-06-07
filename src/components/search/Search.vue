<template>
  <div class="search-wrapper">
    <ul class="search-results">
      <!-- <search-item></search-item> -->
    </ul>
    <div class="pages">
      <button class="pages__left-btn">
        <svg
          class="icon-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" />
        </svg>
        <span class="content-left">Page <span class="number-left">1</span></span>
      </button>
      <button class="pages__right-btn">
        <span class="content-right">Page <span class="number-right">3</span></span>
        <svg
          class="icon-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import SearchItem from "./SearchItem.vue";
export default {
  components: {
    searchItem: SearchItem
  }
};
</script>

<style scoped>
.search-results {
  list-style-type: none;
  margin-bottom: 20px;
}

.icon-left,
.icon-right {
  width: 1rem;

}

.pages {
  display: flex;
  justify-content: space-between;
}

.pages__left-btn,
.pages__right-btn {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  font-size: 0.7rem;
  border: none;
  border-radius: 20px;
  color: #fb6759;
  fill: currentColor;
  background-color: hsl(26, 33%, 96%);
  cursor: pointer;
  transition: background-color 350ms;
}

.pages__left-btn:hover,
.pages__right-btn:hover {
  background-color: hsla(26, 33%, 86%);
}

.pages__left-btn {
  margin-left: 2.5rem;
}

.pages__right-btn {
  margin-right: 2.5rem;
}

.content-left {
  margin-left: 0.4rem;
}

.content-right {
  margin-right: 0.4rem;
}

.icon-left {
  transform: rotate(180deg);
}
</style>
