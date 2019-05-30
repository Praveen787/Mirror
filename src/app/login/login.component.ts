import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm ;

  constructor( ) { }


  ngOnInit() {
    this.loginForm= new FormGroup({
      User : new FormControl(''),
      password : new FormControl(''),
      saveID : new FormControl('')
    })
   }

  onSubmit(){
    console.log('Hello World')
  }


}
