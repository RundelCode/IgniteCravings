import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuScreenComponent } from './pages/menuScreen/menuScreen.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    menuScreenComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
  exports:[
    menuScreenComponent
  ]
})
export class MenuModule { }
