import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  friends:  Friend[]  =[];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // this.getFriends();
  }
  // getFriends(){
  //   this.httpClient.get<any>('https://pokeapi.co/api/v2/').subscribe(
  //     response => {
  //       console.log(response);
  //       this.friends = response;
  //     }
  //   );
  // }
  

}


export class Friend {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public department: string,
    public email: string,
    public country: string
  ) {
  }
}
