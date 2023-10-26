import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if a token is found in local storage
  }

  logout() {
    // Clear the token from local storage to "log out" the user
    localStorage.removeItem('token');
    
    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
}
