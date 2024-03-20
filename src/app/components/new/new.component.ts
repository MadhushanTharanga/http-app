import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent  {

  form = new FormGroup({

    id: new FormControl(),
    userId: new FormControl(),
    title: new FormControl(),
    body: new FormControl()
});
  crateDate(){
    console.log(this.form)
  }

}
