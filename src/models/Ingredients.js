import uniqid from 'uniqid';

export default class Ingredients {
  constructor() {
    this.shopList = []
  }

  addIngredient(ingredient) {
    ingredient.id = uniqid();
    this.shopList.push(ingredient);
  }
}