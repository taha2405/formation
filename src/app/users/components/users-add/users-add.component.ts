import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  addForm!: FormGroup;
  form!: FormGroup;
  
  

  constructor(private usersService: UsersService,
    
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      adress:new FormControl('', Validators.required),
    });
  }
  addData(): void {    
   this.usersService.createUser(this.form.value).subscribe((res:any) => {
    console.log('Post add successfully!');
    this.router.navigateByUrl('/users');
})
}
}
