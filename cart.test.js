const Cart = require('./cart');
const Product = require('./product');
const expect = require('chai').expect;

describe('Cart', () => {

    let setUp = () => {
        return new Cart();
    }
    it('should initialize as empty', () => {
        // Arange
        const cart = setUp();
        const expected = [];
      
        // Act
        const actual = cart.getItems();

        // Expected
        expect(actual).to.deep.equal(expected);
    });

    it('should add a product to the cart,', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        cart.addItemsToCart(productOne, 2);
        const expected = 1;
        
        // Act
        const actual = cart.getItems();

        // Assert
        expect(actual.length).to.be.equals(expected);
    });


    it('should get a product to the cart based on the product name', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.getItem("Brush");

        // Assert
        expect(actual[0].item.name).to.deep.equal(productTwo.name);
    });

    it('should delete a product to the cart based on the product name', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.deleteItem("Brush");

        // Assert
        expect(actual.length).to.deep.equal(1);
    });

    it('should show all discounted product', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.getAllDiscountedPriceCart();

        // Assert
        expect(actual[0].toString()).to.deep.equal('10 x 2 = 20', '3 x 1 = 3');
    });

    it('should show discounted product based on name Name', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.getDiscountedPriceBasedOnNameCart("Soap");

        // Assert
        expect(actual[0].toString()).to.deep.equal('10 x 2 = 20');
    });

    it('should show discounted product Line Items', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.getTotalOfDiscountedItemsLineItems();

        // Assert
        expect(actual.toString()).to.deep.equal('Soap 8');
    });

    it('should show all undiscounted items in list items', () => {
        // Arrange
        const cart = setUp();
        const productOne = new Product("Soap", 10, true);
        const productTwo = new Product("Brush", 3, true);
        cart.addItemsToCart(productOne, 2);
        cart.addItemsToCart(productTwo, 1);

        // Act
        const actual = cart.getTotalOfUnDiscountedItemsLineItems();

        // Assert
        expect(actual.toString()).to.deep.equal(' Brush 3');
    });

    it("show the correct value of the discount", () => {
        // Arrange
        let expected = 30;
        let qty = 3;
        const cart = setUp();

        // Act
        let actual = cart.percentDiscountProvided(qty);
        
        // Assert
        expect(actual).to.be.equals(expected);
    });
});
