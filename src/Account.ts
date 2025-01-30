import { ShoppingCart } from "./Shopping_Cart";
import { Payment } from "./Payment";
import { Order } from "./Order";

export class Account {
    private id: number;
    private billing_address: string;
    private is_closed: boolean;
    private open: string;
    private close: string;
    private shoppingCart: ShoppingCart[];
    private payment: Payment[];
    private orders: Order[]; // เพิ่มคำสั่งซื้อ

    constructor(id: number, billing_address: string, is_closed: boolean, open: string, closed: string) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.close = closed;
        this.shoppingCart = [];
        this.payment = [];
        this.orders = [];
    }

    public getShoppingCart(): ShoppingCart[] {
        return this.shoppingCart;
    }

    public closeAccount(): void {
        this.is_closed = true;
        this.close = new Date().toString(); 
    }

    public addOrder(order: Order): void {
        this.orders.push(order);
    }

    public addPayment(payment: Payment): void {
        this.payment.push(payment);
    }

    public toString(): string {
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
