import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent  {

  list: Array<any>=[];

  constructor(private http:HttpClient, private _snackBar: MatSnackBar ) { }


  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response=>{
        console.log(response);
        this.list=response;
        console.log(this.list)
      });
  }

  delete(id:any) {
    if (confirm('Are you sure '+id)){
      this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/'+id)
        .subscribe(response=>{
          if (response){

            this._snackBar.open('saved !!','close',{
              horizontalPosition:'center',
              verticalPosition:'top',
              duration:5000,
              direction:'ltr'
            });
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].id==id){
                this.list.splice(i,1);
                return;
              }
                }
          }
        });
    }
  }
}
