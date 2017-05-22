import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PermissionComponent } from './permission/permission.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
