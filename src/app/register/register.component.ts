import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup , FormArray} from '@angular/forms'
import { ForbiddenNameValidator } from '../shared/username.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm : FormGroup;

  // replace all occurences of registrationForm.get('userName') with userName
  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('Email');
  }

  constructor (private fb : FormBuilder , private _registrationService : RegisterService ){}

  ngOnInit(){

    //  registrationForm = new FormGroup({
  //    userName : new FormControl('Praveen'),
  //    Password : new FormControl(''),
  //    ConfirmPassword : new FormControl(''),
  //    address : new FormGroup({
  //      City : new FormControl(''),
  //      State : new FormControl(''),
  //      Postalcode : new FormControl('')
  //    })
  //  });


    this.registrationForm = this.fb.group({
      userName : ['' , [Validators.required , Validators.minLength(3), ForbiddenNameValidator(/password/)]],
      Email : [''],
      Password : [''],
      ConfirmPassword : [''],
      address : this.fb.group({
        City : [''],
        State : [''],
        Postalcode : ['']
      }),
    }, { validator : PasswordValidator });
  }



   loadApiData(){
     // setValue used when setting value for all fields of form
     // patchValue is used when setting value for few
     this.registrationForm.patchValue({
       userName : "Bruce",
       Password : "test",
       ConfirmPassword : "test",
       address : {
         City :"Orlando",
         State : "Texas",
         Postalcode : "37019"
       }
     });
   }

   onSubmit(){
     console.log(this.registrationForm.value)
     this._registrationService.register(this.registrationForm.value)
     .subscribe(
       response => console.log('Success!' , response),
       error => console.log('Error!!' , error)
     )
   }
}
