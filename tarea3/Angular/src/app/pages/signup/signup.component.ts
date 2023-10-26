import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder, private http: HttpClient, private router: Router){
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, () => this.validateDomain()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, [Validators.requiredTrue]] 
    }, {
      validators: [() => this.comparePasswords()]
    });
  }

  hasError(controlName: string, errorName: string){
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }

  //match

  comparePasswords(){
    if(!this.form) return null;
    const { password, confirm } = this.form.getRawValue();

    if (password === confirm) {
      return null;
    }
    else{
      return {
        match: true
      }
    }
  }

  validateDomain(){
    if(!this.form) return null;
    const { email } = this.form.getRawValue();

    const domain = email.split('@')[1]
    if (domain === 'iteso.mx'){
      return null;
    }
    else{
      return {
        domain: {required : 'iteso.mx', current: domain}
      };
    }
  }

  signup() {
    if (this.form.valid) {
      const { name, email, password } = this.form.value;
      const signUpData = { name, email, password };
  
      // Make a POST request to the sign-up endpoint
      this.http.post('http://localhost:3000/user', signUpData).subscribe(
        (signUpResponse: any) => {
          console.log('Sign-up response:', signUpResponse);
          if (signUpResponse) {
            this.http.post('http://localhost:3000/login', signUpData).subscribe(
              (loginResponse: any) => {
                console.log('Login response:', loginResponse);
                if (loginResponse.token) {
                  localStorage.setItem('token', loginResponse.token);
                  this.router.navigate(['/photos']);
                }
              },
              (loginError) => {
                console.error('Login error:', loginError);
              }
            );
          }
        },
        (signUpError) => {
          console.error('Sign-up error:', signUpError);
        }
      );
    }
  }
  

}
