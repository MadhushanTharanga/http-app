import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent  {

  constructor(private http:HttpClient, private _snackBar: MatSnackBar ) { }
  form = new FormGroup({

    id: new FormControl('',[Validators.required ,Validators.maxLength(5)]),
    userId: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
});
  crateDate(){
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts',{
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value
    })
      .subscribe(response=>{
        if (response){
          this._snackBar.open('saved !!','close',{

            horizontalPosition:'center',
            verticalPosition:'top',
            duration:5000,
            direction:'ltr'
          })
        }

      });
  }

}
