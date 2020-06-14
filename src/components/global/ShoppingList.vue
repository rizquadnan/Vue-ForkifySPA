<template>
  <!-- <div class="shopping-list-wrapper"> -->
  <div class="shops-panel_">
    <h2 class="shops-panel__heading">My shopping list</h2>
    <ul class="shops-panel__shops-list">
      <shop-item
        v-for="(ingredient, index) in $store.state.shopList.shopList"
        :key="index"
        :ingredient="ingredient"
      ></shop-item>
    </ul>
    <!-- <pages
      v-if="isLargeEnough"
      :curPage="curPage"
      :maxPage="maxPage"
      :resPerPage="resPerPage"
      :isOnSearch="false"
      :isOnShopList="true"
    ></pages> -->
  </div>
</template>

<script>
import { eventBus } from "./../../main.js";
import { mapGetters, mapMutations } from "vuex";
import { store } from "../../store/store";

export default {
  data() {
    return {
      // curPage: 1,
      // maxPage: 0,
      // resPerPage: 8,
      // isLargeEnough: false
    };
  },
  computed: {
    ...mapGetters(["stateShopList"])
  },
  methods: {
    ...mapMutations(["deleteShopListItem"]),
    // renderShopList() {
    //   const start = (this.curPage - 1) * this.resPerPage;
    //   const end = this.curPage * this.resPerPage;
    //   this.$store.state.renderedShopList = this.$store.state.shopList.shopList.slice(
    //     start,
    //     end
    //   );
    // }
  },
  mounted() {
    eventBus.$on("deleteButtonClicked", id => {
      this.deleteShopListItem(id);
      // this.renderShopList();
    });

    eventBus.$on('ingredientsAddedDesktop', () => {
      // if (this.$store.state.shopList.shopList.length >= this.resPerPage) {
      //   console.log("hey");
      //   this.isLargeEnough = true;
      // }
      // this.renderShopList();
    });
  },
  created() {
    // eventBus.$on('renderPageDesktop', payload => {
    //   this.curPage = payload.curPage;
    //   this.maxPage = payload.maxPage;
    //   this.renderSearch();
    // });
  }
};
</script>

<style scoped>
.shops-panel_:hover,
.shop-list__icon:hover + .shops-panel_ {
  visibility: visible;
  opacity: 1;
}

.shops-panel__heading {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #f59a83;
  text-transform: uppercase;
  text-align: center;
  transform: skewY(-3deg);
  margin-bottom: 30px;
}
</style>
