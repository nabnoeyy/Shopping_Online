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
    toString() {
        return "Payment[ID: " + this.id + "" + "Paid: " + this.paid + "" + "Total: " + this.total + "" + "Details: " + this.details + "" + "]";
    }
}
exports.Payment = Payment;
