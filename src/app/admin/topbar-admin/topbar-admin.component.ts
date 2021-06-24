import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-topbar-admin',
  templateUrl: './topbar-admin.component.html',
  styleUrls: ['./topbar-admin.component.scss']
})
export class TopbarAdminComponent implements OnInit {
  userData:any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userData = localStorage.getItem('login')
  }
  logout(){
    this.userService.getProducts().subscribe((res) => {
      localStorage.clear()
      console.log(res)
    });
  }

}
