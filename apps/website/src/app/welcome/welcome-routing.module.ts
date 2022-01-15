import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: WelcomeComponent
    }
  ])],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
