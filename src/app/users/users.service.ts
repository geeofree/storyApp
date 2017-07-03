import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  endpoint = "http://localhost:8080/user/";

  constructor(private http: Http){}

  getUser(id) {
    const { endpoint, http } = this
 		return http.get(endpoint + id).map((res: Response) => res.json())
  }

  getAllUsers() {
    const { endpoint, http } = this
    return http.get(endpoint).map((res: Response) => res.json())
  }
}
