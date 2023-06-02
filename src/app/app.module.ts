import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
//Outside components
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DialogSignUpComponent } from './dialog-sign-up/dialog-sign-up.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ProductDashboardComponent,
    LoginComponent,
    HeaderComponent,
    DialogSignUpComponent,
    UserdashboardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSortModule,
    FormsModule,
    NgIf,MatGridListModule,
    MatDialogModule,ReactiveFormsModule,HttpClientModule,MatPaginatorModule,
    MatSelectModule,BrowserAnimationsModule,NoopAnimationsModule,
    MatTableModule,MatSidenavModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
