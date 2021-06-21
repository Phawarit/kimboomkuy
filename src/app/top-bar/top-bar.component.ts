import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


  userdata: any 

  constructor(

  ) { }

  ngOnInit(): void {
    // this.userdata =localStorage.getItem('login_succes')
    
  }

}
