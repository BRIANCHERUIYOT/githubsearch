import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUser(): Observable<githubsearch[]>{
    // let param = new HttpParams();
    // param = param.append('username','BRIANCHERUIYOT');
    return this.httpClient.get<githubsearch[]>('http://api.github.io.users',{
      // params: param;/ 
      // headers:this.headers,
      withCredentials:true

    })
  }
}
