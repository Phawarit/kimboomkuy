import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  displayedColumns: string[] = ['position','dateCard', 'dateCheckout', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  dateCard:string;
  dateCheckout:string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'บัตรเครดิต', dateCard:'24/5/2012' , dateCheckout:'24/5/2012', weight: '59,090' , symbol: 'สั่งซื้อสำเร็จ'},
  {position: 2, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 3, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 4, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 5, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 6, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 7, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 8, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 9, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 10, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 1, name: 'บัตรเครดิต', dateCard:'24/5/2012' , dateCheckout:'24/5/2012', weight: '59,090' , symbol: 'สั่งซื้อสำเร็จ'},
  {position: 2, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 3, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 4, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 5, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 6, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 7, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
  {position: 8, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 9, name: 'บัตรเครดิต', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'สั่งซื้อสำเร็จ'},
  {position: 10, name: 'ชำระเงินปลายทาง', dateCard:'24/5/2012', dateCheckout:'24/5/2012', weight: '59,090', symbol: 'ยกเลิกคำสั่งซื้อ'},
];