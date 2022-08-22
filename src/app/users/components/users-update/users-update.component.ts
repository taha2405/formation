import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/model/model.users';
import { UsersService } from '../../services/users.service';
import { UsersComponent } from '../../users.component';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
  formEdit!: FormGroup;
  users = new Users();

  constructor(private cdr: ChangeDetectorRef,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: { index: number, id: number },
    private dialogRef: MatDialogRef<UsersComponent>,
  ) { }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
    });
    this.getUsers();
  }
  getUsers() {
    this.usersService.findById(this.data.id).subscribe((data: Users) => {
      this.users = data;
      this.formEdit.patchValue(data);
      this.cdr.detectChanges;
    })
  }
  editData(id: number) {
    // console.log(id);
    this.usersService.updateUser(id, this.formEdit.value)
      .subscribe(data => {
        // console.log(data);
        this.dialogRef.close();

      });


  }


}
