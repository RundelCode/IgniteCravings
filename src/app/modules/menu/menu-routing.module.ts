import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { menuScreenComponent } from './pages/menuScreen/menuScreen.component';

const routes: Routes = [
  { path: '', component: menuScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}