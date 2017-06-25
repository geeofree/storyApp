import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService],

})
export class UsersComponent implements OnInit {
<<<<<<< HEAD
  constructor(private usersService:UsersService) {}

  ngOnInit() {
    this.usersService.getAllStory().subscribe(res => console.log(res))
=======
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
>>>>>>> 4a40aafca1f2c02f33638a791abf352c9391c514
  }
}

}
