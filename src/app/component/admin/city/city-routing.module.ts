import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';
import { ListcityComponent } from './listcity/listcity.component';

const routes: Routes = [
  {path:'addcity' ,component:AddcityComponent},
  {path:'editcity', component:EditcityComponent},
  {path:'listcity', component:ListcityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
