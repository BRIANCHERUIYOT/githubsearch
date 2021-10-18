import { Component, OnInit,} from '@angular/core'; 
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit { 
  title = 'githubsearch';

  constructor(private userService: UserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');

    this.getPublicRepositories();
  }
  


  getPublicRepositories(){
    this.userService.getUser().subscribe((response : any) =>{
      console.log(response);
    })
  }

}
