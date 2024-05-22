import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderScreenComponent } from './pages/slider-screen/slider-screen.component';


const routes: Routes = [
  { path: '', component: SliderScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule {}