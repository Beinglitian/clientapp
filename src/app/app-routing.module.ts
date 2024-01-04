import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './component/layout/adminlayout/adminlayout.component';
import { RegistrationComponent } from './component/admin/registration/registration.component';

const routes: Routes = [
  {path:'', component:AdminlayoutComponent},
  {path:'registration' , component:RegistrationComponent},
  {path:'admin', component:AdminlayoutComponent,
  children: [
    {
      path:'',
      loadChildren:()=> import('./component/admin/admin.module').then(m => m.AdminModule)
    }
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
