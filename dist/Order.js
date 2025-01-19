"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, ordered, shipped, ship_to, status, lineItems = [], total, payment = []
    // รับค่าเป็น Array หรือ Default เป็น Array เปล่า
    ) {
        this.id = id;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.lineItems = lineItems;
        this.total = this.calTotal();
        this.payment = payment;
    }
    // เพิ่ม LineItem ใน Order
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
        this.total = this.calTotal(); // อัปเดตยอดรวมทุกครั้งที่เพิ่มสินค้า
    }
    // คืนค่ารายการสินค้าทั้งหมด
    getLineItems() {
        return this.lineItems;
    }
    // เปลี่ยนสถานะของ Order
    updateStatus(status) {
        this.status = status;
    }
    calTotal() {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice();
        }
        return total;
    }
    calPayment() {
        let totalPayment = 0;
        for (let i = 0; i < this.payment.length; i++) {
            totalPayment += this.payment[i].getTotal(); // Use getTotal() to get the payment total
        }
        return totalPayment;
    }
    // แปลงข้อมูล Order เป็น String
    toString() {
        return "Order[ number: " + this.id + "" + "Ordered: " + this.ordered + "" + "Shipped: " + this.shipped + "" + "Ship_to: " + this.ship_to + "" + "สถานะ :" + this.status + this.status + "" + "lineItem: " + this.lineItems.map((item) => item.toString()).join(", ") + "" + "ยอดเงินรวม : " + this.total.toFixed(2) + "]";
    }
}
exports.Order = Order;
