// BEGIN
export default class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addItem(productEntry, quantity) {
    this.products.push({ item: productEntry, count: quantity });
  }

  getItems() {
    return this.products;
  }

  getCost() {
    return this.products.reduce((sum, { item, count }) => {
      return sum + (item.price * count);
    }, 0);
  }

  getCount() {
    return this.products.reduce((total, { count }) => {
      return total + count;
    }, 0);
  }
}
// END