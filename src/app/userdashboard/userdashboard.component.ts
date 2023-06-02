import { Component } from '@angular/core';
import { OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import { DialogSignUpComponent } from '../dialog-sign-up/dialog-sign-up.component';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
  template :``
})

export class UserdashboardComponent {
  title = 'User Dashboard';
  // Bo function vao day
  displayedColumns: string[] = 
  ['id',
  'userName',
  'Gender', 
  'email',
  'name',
  'description',
  'role',
  'action'
  ];
  dataSource !:  MatTableDataSource<any> ;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog: MatDialog , private api : ApiService) {
  }
  ngOnInit() : void{
      this.getAllUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSignUpComponent, {
      width : '50%'
    }).afterClosed().subscribe(data => {
        if(data == 'save'){
          this.getAllUsers();
        }
    });
  }
  getAllUsers(){
    this.api.getUsers()
    .subscribe({
      next: (res) => {
        //Data source
        console.log(res.value)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: () => {
        alert("Error while retriving Records")
      }
    })
  }

  editUser(row : any) : void{
    this.dialog.open(DialogSignUpComponent, {
      width : '50%'
      ,data:row
    }).afterClosed().subscribe(data => {
      if(data == 'update'){
        this.getAllUsers();
      }
  });
  }

  deleteUser(id : number){
    this.api.deleteUsers(id)
    .subscribe({
      next: (res) => {
        alert("User deleted successfully");
        this.getAllUsers();
      },
      error : () => {
        alert("Error while deleting User")
      }
    })
  }
}