import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
   private user: SocialUser;
   private loggedIn: boolean;

  constructor(private userService: UserService,private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
            username: new FormControl("",Validators.required),
            password: new FormControl("",Validators.required),
            email: new FormControl("",Validators.required),
            firstName: new FormControl("",Validators.required),
            lastName: new FormControl("",Validators.required)
        });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
     });
  }

  signUpUser(user){
            console.log(user);
            this.userService.createNewUser(user).subscribe();
    }

  signInWithGoogle(): void {
   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

   signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
   }

    signOut(): void {
      this.authService.signOut();
   }

}
