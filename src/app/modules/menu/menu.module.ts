import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuScreenComponent } from './pages/menuScreen/menuScreen.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    menuScreenComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports:[
    menuScreenComponent
  ]
})
export class MenuModule { }
