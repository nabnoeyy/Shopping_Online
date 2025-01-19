import { UserState } from "./UserState"
import { Shopping_Cart } from "./Shopping_Cart"

export class WebUser {
    private login_id:string
    private password:string
    private state:string



    constructor (login_id:string,password:string,state:UserState){
        if (!login_id || !password) {
            throw new Error("login_id and password cannot be empty.");
        }
        
        this.login_id = login_id
        this.password = password
        this.state = UserState.NEW;
    }
    public getLoginId():string{
        return this.login_id
    }
    public getPassword():string{
        return this.password
    }
    public setPassword(password:string):void{
        this.password = password
    }
    public getState():UserState{
        return this.state
    }
    public setState(state:string):void{
        this.state = state
    }
    public toString():string{
        return "WebUser[loginID: "+this.login_id+" "+"Password: "+this.password+" "+"State: "+this.state+"]"
    }

}