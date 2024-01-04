import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuterRoutingModule } from './outer-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    OuterRoutingModule
  ]
})
export class OuterModule { }
