import { Shopping_Cart } from "./Shopping_Cart"
import { Payment } from "./Payment"

export class Account {
    private id:number
    private billing_address: string
    private is_closed:boolean
    private open:string
    private close:string
    private shoppingCart:Shopping_Cart[]
    
    
    constructor(id:number,billing_address:string,is_closed:boolean,open:string,closed:string) {
        this.id = id
        this.billing_address = billing_address
        this.is_closed = is_closed
        this.open = open
        this.close = closed
        this.shoppingCart=[]
    }
    // public createShoppingCart(created:string):void{
    //     const cart = new Shopping_Cart(created);
    //     this.shoppingCart.push(cart)
    // }

    public getshoppingCart():Shopping_Cart[]{
        return this.shoppingCart
    }
    public closedAccount():void{
        this.is_closed = true
        this.close = new Date().toString(); // บันทึกเวลาเมื่อปิดบัญชี
    }
    public toString():string{
        return "Account[ID: "+this.id+""+"Billing: "+this.billing_address+""+"is_closed: "+this.is_closed+""+"Open"+this.open+""+"Closed: "+this.close+""+"ShoppingCart: "+this.shoppingCart.map(cart => cart.toString()).join(", ")+"]"
    }

}