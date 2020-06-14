import Vue from 'vue'
import App from './App.vue'
import ShopItem from './components/global/ShoppingItem.vue'
import ShopList from './components/global/ShoppingList.vue'
import AjaxSpinner from './components/global/AjaxSpinner.vue'
import PageButton from './components/global/PaginationButtons.vue'

import { store } from './store/store.js'

Vue.component('shop-item', ShopItem);
Vue.component('shopping-list', ShopList);
Vue.component('ajax-spinner', AjaxSpinner);
Vue.component('pages', PageButton);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
