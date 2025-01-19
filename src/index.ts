// const {Product} = require("./Product")

// import { Order} from "./Order"
// import { OrderStatus } from "./OrderStatus"
// import { UserState } from "./UserState"
// import { Product } from "./Product"


// const product = new Product ("nab12","nabnoeyy","Fam SD");
// console.log (product.toString());

// const { UserState } = require ("./UserState")
// const {WebUser} = require ("./WebUser")
// const webUser = new WebUser ("nabnoey19","nab190248")
// console.log (webUser.toString())

// const {LineItem} = require ("./LineItem")

// const product = new Product ("nab12","nabnoeyy","Fam SD")
// const item = new LineItem (3,500,product)
// console.log (item , product.toString())
// console.log("Total Peice:" , item.calTotal());

// const {Payment} = require ("./Payment")
// const {order} = require ("./Order")



// // const item = new LineItem (3,500,product)
// const pay = new Payment (101,"20/01/2025",1500,"gop")
// console.log (order,pay.toString())


//ข้อ1 เพิ่ม product 5 ชนิด (เครื่องเขียน)
// const {Product} = require("./Product")

// const product1 = new Product (101 , "สมุด" , "บ.เนย จำกัด")
// const product2 = new Product (102 , "ปากกา" , "บ.เนย จำกัด")
// const product3 = new Product (103 , "ไม้บรรทัด" , "บ.เนย จำกัด")
// const product4 = new Product (104 , "สีไม้" , "บ.เนย จำกัด")
// const product5 = new Product (105 , "กระเป๋าดินสอ" , "บ.เนย จำกัด")

// console.log (product1.toString())
// console.log (product2.toString())
// console.log (product3.toString())
// console.log (product4.toString())
// console.log (product5.toString())


// ข้อ2 เพิ่ม web user 2 คน

// import {WebUser}  from "./WebUser"
// import {Customer}  from "./Customer"
// import {Account}  from "./Account"
// import {UserState}  from "./UserState"
// import {Payment}  from "./Payment"



// const user1 = new WebUser ("BL036","Boon36",UserState)
// const customer = new Customer ("01",user1,"Nakhon Pathom",986438616,"nabnoeyy@gmail.com")
// const pay1 = new Payment ("LY1","คือไรว้า",500,"so good")
// const account = new Account(1,"Nakhon Pathom",false,"2025-01-18T08:00:00Z","");

// console.log (user1.toString())
// console.log (customer.toString())
// console.log (pay1.toString())
// console.log (account.toString())

// console.log("#########################################")

// const user2 = new WebUser ("Fey","F005",UserState)
// const customer2 = new Customer ("02",user2,"Nakhon Pathom",986438616,"Fey@gmail.com")
// const pay2 = new Payment ("LY2","คือไรว้า",550,"so good")
// const account2 = new Account(1,"Nakhon Pathom",false,"2025-01-18T08:00:00Z","");

// console.log (user2.toString())
// console.log (customer2.toString())
// console.log (pay2.toString())
// console.log (account2.toString())




// ให้ user แต่ละคน สั่งสินค้าคนละ 1 order และ 1 ตะกร้าสินค้า โดยมากกว่า 1 ชิ้น

import { WebUser } from "./WebUser";
import { Order } from "./Order";
import { LineItem } from "./LineItem";
import { Shopping_Cart } from "./Shopping_Cart";
import { UserState } from "./UserState";
import { Product } from "./Product";
import { OrderStatus } from "./OrderStatus";
import { Payment } from "./Payment";

const user1 = new WebUser("nabnoeyy", "1902n", UserState);
const product = new Product("Kuay02", "nabnoey", "BFJ02");
const lineItem = new LineItem(4, 569, product);
const order1 = new Order("LAY1", "คือไร งง", "01/01/2025", "03/01/2025", OrderStatus.NEW, [lineItem], 0);
const shopping = new Shopping_Cart(order1);
const pay1 = new Payment("Pay1", new Date("01-01-2025"), 3000, "จ่ายแล้วคั้บ");

function process(
    shopping: Shopping_Cart,
  user1: WebUser,
  order1: Order,
  lineItem: LineItem,
  pay1: Payment
  ) {
    let receipt = `
   ================================================
                ใบเสร็จการซื้อสินค้า
================================================
ผู้ใช้งาน: nabnoeyy
วันที่สั่งซื้อ: 01/01/2025
วันที่จัดส่ง: 03/01/2025

สถานะคำสั่งซื้อ: NEW

รายละเอียดสินค้า:
----------------------------------------------
ชื่อสินค้า: Kuay02
หมายเลขสินค้า: BFJ02
จำนวน: 4 ชิ้น
ราคาต่อชิ้น: 569 บาท
รวมเป็นเงิน: 2276 บาท

รวมทั้งหมด: 0 บาท

================================================
การชำระเงิน:
----------------------------------------------
วิธีการชำระเงิน: Pay1
วันที่ชำระ: 1/1/2025
จำนวนเงินที่ชำระ: 3000 บาท
สถานะการชำระเงิน: จ่ายแล้วคั้บ

================================================
ขอบคุณที่ใช้บริการ!
================================================

    `;
    return receipt;
}

// แสดงผลใบเสร็จ
console.log(process(shopping, user1, order1, lineItem, pay1));



// console.log("#######################################")

// import { Shopping_Cart } from "./Shopping_Cart"
// import { Order } from "./Order"
// import { OrderStatus } from "./OrderStatus"
// import { LineItem } from "./LineItem"
// import { Product } from "./Product"
// import { Payment } from "./Payment"


// const product = new Product ("Kuay02","nabnoey","BFJ")
// const lineItem = new LineItem(4,569,product)

// const pay1 = new Payment("Pay1", new Date("01-01-2025"), 3000, "จ่ายแล้วอีสัส");
// const order1 =  new Order ("LAY1","คือไร งง","01/01/2025","03/01/2025",OrderStatus.NEW,[lineItem],0,[pay1]);
// const shopping = new Shopping_Cart(order1)





