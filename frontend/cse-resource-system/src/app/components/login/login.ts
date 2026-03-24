import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username='';
  password='';
  error=false;
  constructor(private router:Router)
  {}
  login()
  {
    if(this.username=='admin' && this.password=='1234')
    {
          localStorage.setItem("auth","true");
          this.router.navigate(['/admin']);
    }
    else{
      this.error=true;
    }
  }
}
