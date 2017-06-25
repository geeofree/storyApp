import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {
  private response;
  private users = [];

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getAllStory().subscribe(res => this.response = res)
  }

  ngDoCheck(){
    const { response, users } = this

    response.forEach(data => {
      users.push({...data})
    })
  }
}
