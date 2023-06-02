import { Component ,OnInit , Inject} from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  h1_title = 'REGISTRATION PRODUCT FORM';

  selected = 'option2';
  productForm !: FormGroup ; 
  constructor(private formBuilder: FormBuilder 
    ,private api  : ApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any , 
    private dialogRef : MatDialogRef<DialogComponent>){
  }
  actionBtn : string = 'Save';
  ngOnInit():void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      size: ['', Validators.required],
      type: ['', Validators.required],
      style: ['', Validators.required],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      supplier: ['', Validators.required]
    })
  if(this.editData){
      this.actionBtn = 'Update';
      this.h1_title = `PRODUCT ID${this.editData.id} INFORMATION`;
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['color'].setValue(this.editData.color);
      this.productForm.controls['size'].setValue(this.editData.size);
      this.productForm.controls['type'].setValue(this.editData.type);
      this.productForm.controls['style'].setValue(this.editData.style);
      this.productForm.controls['brand'].setValue(this.editData.brand);
      this.productForm.controls['description'].setValue(this.editData.description);
      this.productForm.controls['supplier'].setValue(this.editData.supplier);
    } 
  };

  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value)
        .subscribe({
          next:(res)=>{
            alert("Product added successfully")
            this.productForm.reset()
          },
          error:()=>{
            alert("Error while adding the product")
          }
        });   
    }
    }
    else{
      this.updateProduct()
    }
  }
  
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated successfully")
        this.productForm.reset()
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error while updating the product")
      }
    })
  }
}
