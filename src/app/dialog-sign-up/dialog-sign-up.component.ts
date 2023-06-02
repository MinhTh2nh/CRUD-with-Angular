import { Component ,OnInit , Inject} from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-dialog-sign-up',
  templateUrl: './dialog-sign-up.component.html',
  styleUrls: ['./dialog-sign-up.component.scss']
})
export class DialogSignUpComponent {
  h1_title = 'REGISTRATION USER FORM';

  selected = 'option2';
  userForm !: FormGroup ; 
  constructor(private formBuilder: FormBuilder 
    ,private api  : ApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any , 
    private dialogRef : MatDialogRef<DialogSignUpComponent>){
  }
  actionBtn : string = 'Submit';
  ngOnInit():void {
    this.userForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, Validators.required],
      userName: [{ value: '', disabled: true }, Validators.required],
      passWord: ['', Validators.required],
      Gender: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      role: ['', Validators.required]
    })
  if(this.editData){
      this.actionBtn = 'Update';
      this.h1_title = `USER ID${this.editData.id} INFORMATION`;
      this.userForm.controls['userName'].setValue(this.editData.userName);
      this.userForm.controls['passWord'].setValue(this.editData.passWord);
      this.userForm.controls['Gender'].setValue(this.editData.Gender);
      this.userForm.controls['email'].setValue(this.editData.email);
      this.userForm.controls['name'].setValue(this.editData.name);
      this.userForm.controls['description'].setValue(this.editData.description);
      this.userForm.controls['role'].setValue(this.editData.role);
    } 
  };
  addUser(){
    if(!this.editData){
      if(this.userForm.valid){
        this.api.postUsers(this.userForm.value)
        .subscribe({
          next:(res)=>{
            alert("User register successfully")
            this.userForm.reset()
          },
          error:()=>{
            alert("Error while registering")
          }
        });   
    }
    }
    else{
      this.updateUser()
    }
  }

  updateUser(){
    this.api.putUsers(this.userForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("User updated successfully")
        this.userForm.reset()
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error while updating the user")
      }
    })
  }
}
