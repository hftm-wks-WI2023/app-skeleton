import {Component} from '@angular/core';
import {AuthenticationService} from "../../../../core/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user = this.authenticationService.user$

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  me(): void {
    this.authenticationService.me().subscribe()
  }


  logout(): void {
    this.authenticationService.logout().subscribe()
  }

  login(): void {
    this.authenticationService.login(
      'admin', 'admin'
    ).subscribe()
  }
}
