import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegister: FormGroup;
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  pass: FormControl;
  data:any = {};
  constructor(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email  = new FormControl('', [Validators.required, Validators.email]);
    this.pass = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)]);

    this.formRegister = new FormGroup({
      name:this.name,
      last:this.lastName,
      email:this.email,
      password:this.pass
    });

  }

  registerSubmit():void{
    if(this.formRegister.valid){
      this.data = this.formRegister.value;
      this.formRegister.reset();
    }
  }

}
