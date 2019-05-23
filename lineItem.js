class LineItem {
    
    constructor(name, qty, actualTotal, discountedTotal, isDiscounted) {
        this.name =  name;
        this.qty = qty;
        this.actualTotal = actualTotal;
        this.discountedTotal = discountedTotal;
        this.isDiscounted = isDiscounted;
    }

}

module.exports = LineItem;