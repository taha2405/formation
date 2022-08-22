import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Users } from '../model/model.users';
import { UsersService } from './services/users.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UsersUpdateComponent } from './components/users-update/users-update.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:Users[]=[];
filterQuery:string="";
  constructor(public usersService:UsersService, private cdr: ChangeDetectorRef ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllusers();
  }
  getAllusers():void{
    this.usersService.getAllUsers().subscribe((data: Users[])=>{
      this.users = data;
      // console.log(this.users);
  
    })
  }
  retrieveClient(): void {
    this.usersService.getAllUsers()
      .subscribe((data: Users[])=>{
        this.users = data;
        console.log(this.users);
        this.cdr.detectChanges();

      })
    
  }
  updateUsers(userId: number, i: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef=this.dialog.open(UsersUpdateComponent, {
      data: {index: i, id: this.users[i].id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log("Result"+result);
      this.retrieveClient();
    });

  }
}

