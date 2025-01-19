import { LineItem } from "./LineItem";
import { OrderStatus } from "./OrderStatus";
import { Payment } from "./Payment";

export class Order {
    private id: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: OrderStatus;
    private total: number;
    private lineItems: LineItem[];
    private payment: Payment[];

    constructor(
        id: string,
        ordered: string,
        shipped: string,
        ship_to: string,
        status: OrderStatus,
        lineItems: LineItem[] = [],
        total: number,
        payment: Payment[] = []
         // รับค่าเป็น Array หรือ Default เป็น Array เปล่า
    ) 
    {
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
    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
        this.total = this.calTotal(); // อัปเดตยอดรวมทุกครั้งที่เพิ่มสินค้า
    }

    // คืนค่ารายการสินค้าทั้งหมด
    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    // เปลี่ยนสถานะของ Order
    public updateStatus(status: OrderStatus): void {
        this.status = status;
    }
    public calTotal(): number {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice();
        }
        return total;
    }
    public calPayment(): number {
        let totalPayment = 0;
        for (let i = 0; i < this.payment.length; i++) {
            totalPayment += this.payment[i].getTotal(); // Use getTotal() to get the payment total
        }
        return totalPayment;
    }
    
    

    // แปลงข้อมูล Order เป็น String
    public toString():string {
        return "Order[ number: "+this.id+""+"Ordered: "+this.ordered+""+"Shipped: "+this.shipped+""+"Ship_to: "+this.ship_to+""+"สถานะ :"+this.status+this.status+""+"lineItem: "+this.lineItems.map((item) => item.toString()).join(", ")+""+"ยอดเงินรวม : "+this.total.toFixed(2)+"]"
    }
}
