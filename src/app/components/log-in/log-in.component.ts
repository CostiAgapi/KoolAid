import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.logInForm = new FormGroup({
          username: new FormControl("",Validators.required),
          password: new FormControl("",Validators.required)
      })
  }

  logInForm: FormGroup;

  loginUser(user){
          console.log(user);
          this.userService.postUserCredentialsToWS(user).subscribe();
   }

  getCars(){
      this.userService.getCars().subscribe();
  }
}
