import { Order  } from "./Order"

export class Shopping_Cart {
    // private created:string
    private orders:Order[];

    constructor (orders:Order){
        // this.created = created
        this.orders = [];
    }
    // public getCreated():string{
    //     return this.created
    // }
    
    // // public setCreated(created:string):void{
    // //     this.created = created
    // }
    public addOrders(order:Order):void{
        this.orders.push(order);
    }

     // Method สำหรับดึงข้อมูล Orders ทั้งหมด
    public getOrders():Order[]{
        return this.orders // คืนค่า Array ของ Order
    }


    public toString():string{
      return "ตะกร้าสินค้า: "+this.getOrders()
    }

}