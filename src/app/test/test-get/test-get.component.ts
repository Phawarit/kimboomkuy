import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './test-get';

@Component({
  selector: 'app-test-get',
  templateUrl: './test-get.component.html',
  styleUrls: ['./test-get.component.scss']
})
export class TestGetComponent implements OnInit {
  booklist: Book[] =[];
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books')
    .subscribe(response=>{
      console.log('Response',response)
      this.booklist = response;
    })
  }

}
