import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.logInForm = new FormGroup({
          username: new FormControl(""),
          password: new FormControl("")
      })
  }

  logInForm: FormGroup;

  loginUser(user){

  }
}
