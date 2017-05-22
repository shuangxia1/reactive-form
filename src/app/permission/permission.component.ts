import {Component, Input,} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'permission',
  templateUrl: './permission.component.html'
})
export class PermissionComponent  {
  @Input('group')
  public permissionForm: FormGroup;

}
