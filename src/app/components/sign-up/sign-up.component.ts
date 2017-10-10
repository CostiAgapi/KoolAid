import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
            username: new FormControl("",Validators.required),
            password: new FormControl("",Validators.required),
            email: new FormControl("",Validators.required)
        })
  }

  signUpUser(user){
            console.log(user);
            this.userService.createNewUser(user).subscribe();
     }

}
