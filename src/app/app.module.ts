import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule  } from '@angular/http';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserService } from './services/user.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';

let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("248256841664-c9p3bo9itpasfit79340v6bvdrm6v8u3.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("1661718923878381")
    }
  ]);

  export function provideConfig() {
    return config;
  }

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomepageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    SocialLoginModule
  ],
  providers: [UserService,
  {
      provide: AuthServiceConfig,
      useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
