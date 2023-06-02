import { Component } from '@angular/core';
import { DialogSignUpComponent } from '../dialog-sign-up/dialog-sign-up.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showFiller = false;
  constructor(private dialog: MatDialog) {
  }
  openDialogSignUp(): void {
    const dialogRef = this.dialog.open(DialogSignUpComponent, {
      width : '50%'
    })
    // .afterClosed().subscribe(data => {
    //     if(data == 'save'){
    //       this.getAllUsers();
    //     }
    // });
  }
}
