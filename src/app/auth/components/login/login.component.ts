import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/model.users';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  users = new Users();
  loginForm!: FormGroup;
  auth!: string;
  constructor(public authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',),
      password: new FormControl('',),
    });
  }
  signIn() {
    const { email, password } = this.loginForm.value;// destrutering 
    this.authService.signIn(email, password)
      .subscribe((result: Users[]) => {
        if (result.length > 0) {
          this.authService.changeLogged(true);
          this.router.navigateByUrl("/users");
        }
      })
  }
}
