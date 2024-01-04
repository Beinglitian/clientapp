import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './component/layout/adminlayout/adminlayout.component';
import { OuterlayoutComponent } from './component/layout/outerlayout/outerlayout.component';
import { BuyerlayoutComponent } from './component/layout/buyerlayout/buyerlayout.component';
import { SellerlayoutComponent } from './component/layout/sellerlayout/sellerlayout.component';
import { SuperadminlayoutComponent } from './component/layout/superadminlayout/superadminlayout.component';
import { AdminheaderComponent } from './component/layout/adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './component/layout/adminlayout/adminfooter/adminfooter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './component/admin/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    OuterlayoutComponent,
    BuyerlayoutComponent,
    SellerlayoutComponent,
    SuperadminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    RegistrationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
