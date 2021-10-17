import { Component } from '@angular/core';
import { RepoService } from './repo/repo.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,RepoService],
})
export class AppComponent {
  title = 'githubsearch';
}
