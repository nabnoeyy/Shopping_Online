export class Payment {
    private id: string;
    private paid: Date;
    private total: number;
    private details: string;
   

    constructor(id: string, paid: Date, total: number, details: string) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
     
    }


    public getID(): String {
        return this.id;
    }

    public getPaid(): Date {
        return this.paid;
    }

    public getTotal(): number {
        return this.total;
    }
    

   

public toString(): string {
    return "Payment[ID: "+this.id+""+"Paid: "+this.paid+""+"Total: "+this.total+""+"Details: "+this.details+""+ "]"
}
}