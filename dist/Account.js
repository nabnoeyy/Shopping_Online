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
    }
    // public createShoppingCart(created:string):void{
    //     const cart = new Shopping_Cart(created);
    //     this.shoppingCart.push(cart)
    // }
    getshoppingCart() {
        return this.shoppingCart;
    }
    closedAccount() {
        this.is_closed = true;
        this.close = new Date().toString(); // บันทึกเวลาเมื่อปิดบัญชี
    }
    toString() {
        return "Account[ID: " + this.id + "" + "Billing: " + this.billing_address + "" + "is_closed: " + this.is_closed + "" + "Open" + this.open + "" + "Closed: " + this.close + "" + "ShoppingCart: " + this.shoppingCart.map(cart => cart.toString()).join(", ") + "]";
    }
}
exports.Account = Account;
