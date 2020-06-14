<template>
  <div class="search-wrapper">
    <ajax-spinner v-if="isSearching"></ajax-spinner>
    <div v-if="searchSuccess" class="search">
      <ul class="search-results">
        <search-item
          v-for="recipe in searchResults"
          :key="recipe.recipe_id"
          :imgSource="recipe.image_url"
          :title="recipe.title"
          :author="recipe.publisher"
          :id="recipe.recipe_id"
        ></search-item>
      </ul>
      <pages
        :curPage="curPage"
        :maxPage="maxPage"
        :resPerPage="resPerPage"
        :isOnSearch="true"
        :isOnShopList="false"
      ></pages>
    </div>
  </div>
</template>

<script>
import SearchItem from "./SearchItem.vue";
import { mapGetters } from "vuex";
import { eventBus } from "./../../main.js";

export default {
  data() {
    return {
      searchResults: [],
      curPage: 1,
      maxPage: 0,
      resPerPage: 6
    };
  },
  methods: {
    renderSearch() {
      const start = (this.curPage - 1) * this.resPerPage;
      const end = this.curPage * this.resPerPage;
      this.searchResults = this.$store.state.query.results.slice(start, end);
    }
  },
  computed: {
    ...mapGetters(["isSearching", "searchSuccess"])
  },
  components: {
    searchItem: SearchItem
  },
  created() {
    eventBus.$on("searchSuccess", () => {
      const start = 0;
      const end = this.resPerPage;
      this.renderSearch(start, end);

      this.maxPage = Math.floor(
        this.$store.state.query.results.length / this.resPerPage
      );
    });

    eventBus.$on('renderPage', payload => {
      this.curPage = payload.curPage;
      this.maxPage = payload.maxPage;
      this.renderSearch();
    });
  }
};
</script>

<style scoped>
.search-results {
  list-style-type: none;
  margin-bottom: 20px;
}
</style>
