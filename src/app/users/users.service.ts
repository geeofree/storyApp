import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

 urlAddress = "localhost:8080/story/";
	constructor(private http: Http){}


   getRequest(id){	
   		return this.http
  			.get(this.urlAddress + id)
  			.map((res: Response) => res.json());
   }

}