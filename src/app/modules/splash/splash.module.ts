import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPageComponent } from './pages/load-page/load-page.component';
import { Router, RouterModule } from '@angular/router';

const routes = [
  { path: '', component: LoadPageComponent }
];


@NgModule({
  declarations: [
    LoadPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoadPageComponent
  ]
})
export class SplashModule { }
