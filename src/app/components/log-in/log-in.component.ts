import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.logInForm = new FormGroup({
          username: new FormControl("",Validators.required),
          password: new FormControl("",Validators.required)
      })
  }

  loginUser(user){
          console.log(user);
          this.userService.postUserCredentialsToWS(user).subscribe();
   }

  getCars(){
      console.log("merge pe aici");
      this.userService.getCars().subscribe(result => console.log(result.json()));
  }
}
