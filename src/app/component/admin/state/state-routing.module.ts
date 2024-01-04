import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstateComponent } from './addstate/addstate.component';
import { EditcityComponent } from '../city/editcity/editcity.component';
import { ListstateComponent } from './liststate/liststate.component';

const routes: Routes = [
  {path:'addstate', component: AddstateComponent},
  {path:'editstate', component:EditcityComponent},
  {path:'liststate', component:ListstateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
