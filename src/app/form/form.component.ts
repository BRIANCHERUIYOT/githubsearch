import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserSService } from '../user-s.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profile: any;
  repos: any;
  username!: string;
  
    constructor(private http: HttpClient, private service: UserSService) {
  
     }
  
     findAccount() {
       this.service.updateProfile(this.username);
       this.service.getProfile().subscribe( (Prof: any) => {
        console.log(Prof);
        this.profile = Prof;
      });
       this.service.getRepos().subscribe((repos: any) => {
         this.repos = repos;
         console.log(repos);
      });
     }
    ngOnInit() {
  
  
      }
    }
  
  
  