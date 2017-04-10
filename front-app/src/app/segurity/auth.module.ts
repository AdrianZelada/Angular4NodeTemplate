
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {AuthDirective} from './auth.directive';
import {AuthDirectiveSave} from './auth.directive';
@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    AuthDirective,AuthDirectiveSave
  ],
  declarations: [AuthDirective,AuthDirectiveSave]
})
export class AuthModule{}
