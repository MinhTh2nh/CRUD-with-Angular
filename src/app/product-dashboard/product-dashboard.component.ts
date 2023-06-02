import { Component } from '@angular/core';
import { OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
  template :``
})
export class ProductDashboardComponent {
  title = 'Product Dashboard';
  // Bo function vao day
  displayedColumns: string[] = 
  ['id',
  'productName',
   'price', 
   'color',
    'size',
    'type',
    'style',
    'brand',
    'description',
    'supplier',
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
      this.getAllProducts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width : '50%'
    }).afterClosed().subscribe(data => {
        if(data == 'save'){
          this.getAllProducts();
        }
    });
  }
  getAllProducts(){
    this.api.getProducts()
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

  editProduct(row : any) : void{
    this.dialog.open(DialogComponent, {
      width : '50%'
      ,data:row
    }).afterClosed().subscribe(data => {
      if(data == 'update'){
        this.getAllProducts();
      }
  });
  }

  deleteProduct(id : number){
    this.api.deleteProduct(id)
    .subscribe({
      next: (res) => {
        alert("Product deleted successfully");
        this.getAllProducts();
      },
      error : () => {
        alert("Error while deleting Product")
      }
    })
  }
}
