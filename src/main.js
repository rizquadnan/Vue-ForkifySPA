import Vue from 'vue'
import App from './App.vue'
import babelPolyfill from 'babel-polyfill'
import ShopItem from './components/global/ShoppingItem.vue'
import ShopList from './components/global/ShoppingList.vue'

Vue.component('shop-item', ShopItem);
Vue.component('shopping-list', ShopList);

new Vue({
  el: '#app',
  render: h => h(App)
})
