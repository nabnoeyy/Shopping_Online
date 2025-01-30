"use strict";
// const {Product} = require("./Product")
Object.defineProperty(exports, "__esModule", { value: true });
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
const WebUser_1 = require("./WebUser");
const Order_1 = require("./Order");
const LineItem_1 = require("./LineItem");
const Shopping_Cart_1 = require("./Shopping_Cart");
const UserState_1 = require("./UserState");
const Product_1 = require("./Product");
const OrderStatus_1 = require("./OrderStatus");
const Payment_1 = require("./Payment");
const user1 = new WebUser_1.WebUser("nabnoeyy", "1902n", UserState_1.UserState);
const product = new Product_1.Product("Kuay02", "สมุดเวทมนต์", "BFJ02");
const product2 = new Product_1.Product("Kuay03", "ปากกา", "BFJ03");
const lineItem1 = new LineItem_1.LineItem(4, 569, product.getName());
const lineItem2 = new LineItem_1.LineItem(1, 60, product2.getName());
const shopping = new Shopping_Cart_1.ShoppingCart([lineItem1]);
const shopping2 = new Shopping_Cart_1.ShoppingCart(lineItem2);
const order1 = new Order_1.Order("LAY1", "คือไร งง", "01/01/2025", "03/01/2025", OrderStatus_1.OrderStatus.NEW, [lineItem1], 0);
const order2 = new Order_1.Order("LAY2", "คือไร งง", "01/01/2025", "03/01/2025", OrderStatus_1.OrderStatus.NEW, [lineItem2], 0);
const pay1 = new Payment_1.Payment("Pay1", new Date("01-01-2025"), 3000, "จ่ายแล้วคั้บ");
console.log(shopping, shopping2, user1.getLoginId(), order1, order2, pay1);
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
