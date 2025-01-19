"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping_Cart = void 0;
class Shopping_Cart {
    constructor(orders) {
        // this.created = created
        this.orders = [];
    }
    // public getCreated():string{
    //     return this.created
    // }
    // // public setCreated(created:string):void{
    // //     this.created = created
    // }
    addOrders(order) {
        this.orders.push(order);
    }
    // Method สำหรับดึงข้อมูล Orders ทั้งหมด
    getOrders() {
        return this.orders; // คืนค่า Array ของ Order
    }
    toString() {
        return "ตะกร้าสินค้า: " + this.getOrders();
    }
}
exports.Shopping_Cart = Shopping_Cart;
