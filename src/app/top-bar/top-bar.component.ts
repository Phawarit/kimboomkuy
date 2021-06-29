import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  userdata: any 
  userData:any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userdata =localStorage.getItem('login_succes')
    this.userData = localStorage.getItem('login')
    // this.userService.getUser().subscribe((user) => {
    //   this.userdata = user
    //   console.log(this.userdata)
    // })
    
    
  }

  logout(){
    this.userService.getProducts().subscribe((res) => {
      localStorage.clear()
      console.log(res)
    });
  }

}
