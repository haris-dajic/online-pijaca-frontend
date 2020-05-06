import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    if(!this.loginForm.valid)
      this.alertify.error('Molimo unesite sve podatke!');
    else {
      const user = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      };
      this.loginService.login(user).subscribe(token => 
        console.log('Token', token), 
        error =>
          this.alertify.error('Login greska'));
    }
  }

}
