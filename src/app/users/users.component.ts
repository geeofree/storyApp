import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService],

})
export class UsersComponent implements OnInit {
arrayOfUsers= [];
 private resArray; 
  constructor(private usersService:UsersService) { }

  ngOnInit() {
  this.usersService.getRequest(2).subscribe(res=>{
  	this.resArray = res;
  	console.log(this.resArray);
  })
 
  }

  ngDoCheck(){
  	console.log(this.resArray);
      for(var i in this.resArray){
        this.arrayOfUsers.push({
          title: this.resArray.title,
          description: this.resArray.description
         
        });

        console.log(this.arrayOfUsers);
  }

}

}
