import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent {
  private response = [];
  private users = [];

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    const { response, usersService } = this
    this.usersService.getAllUsers().subscribe(res => response = res)
  }

  ngDoCheck(){
    const { response, users } = this
    response.forEach(data => users.push({...data}))
  }
}
