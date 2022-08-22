import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/model/model.users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  users=new Users();
  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      firstName: new FormControl('', ),
      lastName: new FormControl('',),
      email: new FormControl('', ),
      password: new FormControl('',),
    });
  }

}
