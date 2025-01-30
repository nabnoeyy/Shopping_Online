"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.close = closed;
        this.shoppingCart = [];
        this.payment = [];
        this.orders = [];
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    closeAccount() {
        this.is_closed = true;
        this.close = new Date().toString();
    }
    addOrder(order) {
        this.orders.push(order);
    }
    addPayment(payment) {
        this.payment.push(payment);
    }
    toString() {
        return `Account[
            ID: ${this.id}, 
            Billing: ${this.billing_address}, 
            Is Closed: ${this.is_closed}, 
            Open: ${this.open}, 
            Closed: ${this.close}, 
            ShoppingCart: [${this.shoppingCart.map(cart => cart.toString()).join(", ")}],
            Payments: [${this.payment.map(pay => pay.toString()).join(", ")}],
            Orders: [${this.orders.map(order => order.toString()).join(", ")}]
        ]`;
    }
}
exports.Account = Account;
