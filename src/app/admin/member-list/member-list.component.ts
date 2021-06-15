import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['position','dateCard', 'dateCheckout', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  surname:string;
  email:string;
  registerDate: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 2, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 3, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 4, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 5, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 6, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 7, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 8, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 9, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'},
  {position: 10, name: 'จอน', surname:'คอนเนอร์' , email:'jonh.c@gmail.com', registerDate: '59.09.20'}
];