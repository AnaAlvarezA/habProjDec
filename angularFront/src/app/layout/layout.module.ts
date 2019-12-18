import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MainStartComponent } from './main-start/main-start.component';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationStartComponent } from './navigation-start/navigation-start.component';
import { NavigationPrivateComponent } from './navigation-private/navigation-private.component';


@NgModule({
  declarations: [FooterComponent,
    MainStartComponent,
    NavigationHomeComponent,
    NavigationStartComponent,
    NavigationPrivateComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    LayoutRoutingModule
  ],
  exports: [FooterComponent,
    MainStartComponent,
    NavigationHomeComponent,
    NavigationStartComponent,
    NavigationPrivateComponent]
})
export class LayoutModule { }
