import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: KontaktComponent},
  ])],
  exports: [RouterModule]
})
export class KontaktRoutingModule { }
