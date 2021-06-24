import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  detailInformation: any;
  Profile:any;
  constructor(
    private userService: UserService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) =>{
      this.Profile = res
    })
    
  }
}
