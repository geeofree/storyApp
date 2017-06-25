import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  this.usersService.getRequest(2).subscribe(res=>{

  	console.log(res);
  })

  }

}
