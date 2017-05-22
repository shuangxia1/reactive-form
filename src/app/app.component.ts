import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public myForm: FormGroup;
  constructor(private _fb: FormBuilder){

  }
  ngOnInit() {

    this.myForm = this._fb.group({
        name: [''],
        description:[''],
        status:[''],
      permissions: this._fb.array([])
      });
  }
  initPermission() {
    return this._fb.group({
      scope: [''],
      object: [''],
      action: ['']
    });
  }
  addPermission(){
    const control =<FormArray>this.myForm.controls['permissions'];
    const addPerm = this.initPermission();
    control.push(addPerm);
  }
  removePermission(i:number){
    const control =<FormArray> this.myForm.controls['permissions'];
    control.removeAt(i);
  }
  save(model: Role){
    console.log(model);
  }
}


export interface Permission{
  scope:string;
  action: string;
  object: string
}
export interface Role{
  name: string;
  description: string;
  status: string;
  permission: Permission[];
}
