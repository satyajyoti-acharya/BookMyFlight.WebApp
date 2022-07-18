import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserData } from './userdata.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: UserData = new UserData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this._auth.loginUser(this.loginModel).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('emailId', this.loginModel.emailId);
      localStorage.setItem('usertype', 'user');
      this._router.navigate(['/Home']);
    }, res => console.log(res));
  }

}
