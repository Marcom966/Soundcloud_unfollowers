import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  userName: string = 'user-name';
  public user(){
    let username = this.userName;
  }

  ngOnInit(): void {
  }

}
