"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
    getID() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    getTotal() {
        return this.total;
    }
    static calPay(payments) {
        let totalPayment = 0;
        for (let i = 0; i < payments.length; i++) {
            totalPayment += payments[i].getTotal();
        }
        return totalPayment.toFixed(2);
    }
    toString() {
        return "Payment[ID: " + this.id + "" + "Paid: " + this.paid + "" + "Total: " + this.total + "" + "Details: " + this.details + "" + "]";
    }
}
exports.Payment = Payment;
