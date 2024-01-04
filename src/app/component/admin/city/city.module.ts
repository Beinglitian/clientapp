import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';
import { ListcityComponent } from './listcity/listcity.component';


@NgModule({
  declarations: [
    AddcityComponent,
    EditcityComponent,
    ListcityComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
