import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {Components} from './index'
@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    Components
  ],
  declarations: [Components]
})
export class DynamicComponentsModule{}
