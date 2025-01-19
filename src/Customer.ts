import { WebUser } from "./WebUser"
import { Account } from "./Account"

export class Customer {
    private webUser:WebUser
    private id:string
    private address:string
    private phone:number
    private email:string
    private account:Account

    constructor (id:string,webUser:WebUser, address:string,phone:number,email:string,account:Account){
        this.webUser = webUser
        this.id = id
        this.address = address
        this.phone = phone
        this.email = email
        this.account = account
    }
    public getID():string{
        return this.id
    }
    public getAddress():string{
        return this.address
    }
    public setAddress(address:string):void{
        this.address = address
    }
    public getPhone():number{
        return this.phone
    }
    
    public setPhone(phone:number):void{
        this.phone = phone
    }
    public getEmail():string{
        return this.email
    }
    public setEmail(email:string):void{
        this.email = email
    }
    public getWebUser(): WebUser {
        return this.webUser;
    }

    public setWebUser(webUser: WebUser): void {
        this.webUser = webUser;
    }

    public toString():string{
        return "Customer[id:"+this.id+""+"webUser: "+this.webUser.toString()+"address:"+this.address+"Phone:"+this.phone+"email"+this.email+"]";
    }
}