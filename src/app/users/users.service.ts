import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  urlAddress = "http://localhost:8080/story/";

<<<<<<< HEAD
  constructor(private http: Http){}
=======
 urlAddress = "http://localhost:8080/story/";
	constructor(private http: Http){}
>>>>>>> 4a40aafca1f2c02f33638a791abf352c9391c514

  getAllStory() {
    return this.http.get(this.urlAddress + "all").map((res: Response) => res.json())
  }

  getStory(id){
 		return this.http
			.get(this.urlAddress + id)
			.map((res: Response) => res.json());
  }

}
