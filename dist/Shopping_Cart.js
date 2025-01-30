"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(created) {
        this.lineItem = [];
        this.created = created;
    }
    getCreated() {
        return this.created;
    }
    setCreated(created) {
        this.created = created;
    }
    getLineItem() {
        return this.lineItem;
    }
    addLineItem(lineItem) {
        this.lineItem.push(lineItem);
    }
    toString() {
        return "ตะกร้าสินค้า: [ lineItem: " + this.lineItem + "]";
    }
}
exports.ShoppingCart = ShoppingCart;
