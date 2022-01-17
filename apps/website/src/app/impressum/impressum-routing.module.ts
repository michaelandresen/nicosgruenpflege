import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ImpressumComponent }
  ])],
  exports: [RouterModule]
})
export class ImpressumRoutingModule { }
