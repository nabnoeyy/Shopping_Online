import { LineItem } from "./LineItem"
export class ShoppingCart{
    private created : string
    private lineItem : LineItem[]=[]

    constructor (created:string){
        this.created = created
    }

    public getCreated():string{
        return this.created
    }

    public setCreated(created:string):void{
        this.created = created
    }
    
    public getLineItem():LineItem[]{
        return this.lineItem
    }

    public addLineItem(lineItem:LineItem):void{
        this.lineItem.push(lineItem)
    }
    public toString ():string{
        return "ตะกร้าสินค้า: [ lineItem: " + this.lineItem+"]"
    }
}