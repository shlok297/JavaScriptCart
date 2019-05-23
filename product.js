class Product {
  constructor(name, price, onSale) {
    this.name = name;
    this.price = price;
    this.onSale = onSale;
  }

  set setName(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setPrice(price) {
    this.price = price;
 }

  get getPrice() {
    return this.price;
  }

  set setOnSale(onSale) {
    this.onSale = onSale;
  }

  get getOnSale() {
    return this.onSale;
  }
}

module.exports = Product;
