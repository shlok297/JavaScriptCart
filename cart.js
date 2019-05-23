var Product = require('./Product');
var LineItem = require('./lineItem');

class Cart {

  constructor() {
    this.totalItems = [];
    this.lineItems = [];
  }

  addItemsToCart = (item, quantity) => {
    this.totalItems.push({ item : item, qty: quantity});
    let disountPercent = this.percentDiscountProvided(quantity)
    let discountedTotal = item.price * ((100 - disountPercent)/ 100);
    let isDiscounted = (discountedTotal === (item.price * quantity))? false : true;
    this.lineItems.push(new LineItem(item.name, quantity, item.price * quantity, discountedTotal, isDiscounted));
  }

  getItems = () => {
    return this.totalItems;
  }

  getItem = (name) => {
    return this.totalItems.filter(x =>  x.item.name === name);
  }

  deleteItem = (name) => {
    let index = 0;
    this.totalItems.forEach(element => {
      if(element.item.name === name) {
        index = this.totalItems.indexOf(element);
      }
    });
    this.totalItems.splice( index , 1 );
    return this.totalItems
  }

  getAllDiscountedPriceCart = () => {
    return this.totalItems.map(x => `${x.item.price} x ${x.qty} = ${x.item.price*x.qty}`);
  }

  getDiscountedPriceBasedOnNameCart = (name) => {
    return this.totalItems.map(x => {
      if(x.item.name === name) {
        return `${x.item.price} x ${x.qty} = ${x.item.price*x.qty}`;
      }
    });
  }

  getTotalOfDiscountedItemsLineItems = () => {
    let discountedElements = '';
    this.lineItems.forEach(element => {
      if(element.isDiscounted === true) {
        discountedElements += element.name + " " + element.discountedTotal;
      }
    })
    return discountedElements;
  }

  getTotalOfUnDiscountedItemsLineItems = () => {
    let unDiscountedElements = '';
    this.lineItems.forEach(element => {
      if(element.isDiscounted === false) {
        unDiscountedElements += " " + element.name + " " + element.discountedTotal;
      }
    })
    return unDiscountedElements;
  }

  percentDiscountProvided = (qty) => {
    switch(qty) {
      case 2:
        return 20;
        break;
      case 3:
        return 30;
      case 4:
        return 40;
      case 5:
        return 50;
      default:
       return 0;
       break;
    }
  }

}
module.exports = Cart;
