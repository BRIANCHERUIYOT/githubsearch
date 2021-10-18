import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users!: Users
getusers(){
  let promise = new Promise((resolve,reject) => {
    this.http.get<users>('https://api.github.com/users')


  })
}

  constructor(private http: HttpClient) { }
}
