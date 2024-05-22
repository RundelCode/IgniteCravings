import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderScreenComponent } from './pages/slider-screen/slider-screen.component';
import { SharedModule } from '../shared/shared.module';
import { SliderRoutingModule } from './slider-routing.module';


@NgModule({
  declarations: [
    SliderScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SliderRoutingModule
  ],
  exports: [
    SliderScreenComponent
  ]
})
export class SliderModule { }
