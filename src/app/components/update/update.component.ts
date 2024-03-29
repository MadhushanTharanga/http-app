import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent  {

  searchId='';
  constructor(private http:HttpClient, private _snackBar: MatSnackBar ) { }
  form = new FormGroup({

    id: new FormControl('',[Validators.required ,Validators.maxLength(5)]),
    userId: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
  });
  updateData(){
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/'+this.searchId,{
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
      body:this.form.get('body')?.value
    })
      .subscribe(response=>{
        if (response){
          this._snackBar.open('updated !!','close',{

            horizontalPosition:'center',
            verticalPosition:'top',
            duration:5000,
            direction:'ltr'
          })
        }

      });
  }
  loadData(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?id='+this.searchId)
      .subscribe(response=>{
        this.form.patchValue({
          id:response[0].id,
          userId:response[0].userId,
          title:response[0].title,
          body:response[0].body,
        })

      });
  }

}
