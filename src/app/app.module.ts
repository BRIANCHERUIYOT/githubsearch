import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './search/search.component';
import { SearchFormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserSService} from './user-s.service';
@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserSService],
  bootstrap: [AppComponent]
})
export class AppModule { } 