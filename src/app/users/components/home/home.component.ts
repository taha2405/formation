import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
logOut(){
  
    this.authService.changeLogged(false);
  this.router.navigateByUrl("/auth/login")
}
}
