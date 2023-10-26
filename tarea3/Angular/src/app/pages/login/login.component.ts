import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private http: HttpClient, private router: Router, private snackBar: MatSnackBar){
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  hasError(controlName: string, errorName: string){
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
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

  login() {
    if (this.form.valid) {
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');
  
      if (emailControl && passwordControl) {
        const emailValue = emailControl.value;
        const passwordValue = passwordControl.value;
  
        const requestBody = {
          email: emailValue,
          password: passwordValue,
        };
  
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
  
        this.http
          .post('http://localhost:3000/login', requestBody, httpOptions)
          .subscribe(
            (response: any) => {
              console.log('API response:', response);
              if (response.token) {
                this.router.navigate(['/photos']);
                localStorage.setItem('token', response.token);
              } 
            },
            (error) => {
              if (error.status === 401) {
                this.snackBar.open('Invalid credentials', 'Close', {
                  duration: 3000, // The duration in milliseconds to show the message
                });
              }
              console.error('API error:', error);
            }
          );
      }
    }
  }
  

}
