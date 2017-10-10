import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
