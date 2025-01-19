"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, webUser, address, phone, email, account) {
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.account = account;
    }
    getID() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getWebUser() {
        return this.webUser;
    }
    setWebUser(webUser) {
        this.webUser = webUser;
    }
    toString() {
        return "Customer[id:" + this.id + "" + "webUser: " + this.webUser.toString() + "address:" + this.address + "Phone:" + this.phone + "email" + this.email + "]";
    }
}
exports.Customer = Customer;
