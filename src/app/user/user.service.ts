import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
}
