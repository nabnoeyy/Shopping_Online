export class Payment {
    private id: String;
    private paid: Date;
    private total: number;
    private details: string;
   

    constructor(id: String, paid: Date, total: number, details: string) {
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
    

    public static calPay(payments: Payment[]): string {
        let totalPayment = 0;
        for (let i = 0; i < payments.length; i++) {
            totalPayment += payments[i].getTotal();
        }
        return totalPayment.toFixed(2);
    }

public toString(): string {
    return "Payment[ID: "+this.id+""+"Paid: "+this.paid+""+"Total: "+this.total+""+"Details: "+this.details+""+ "]"
}
}