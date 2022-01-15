import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GartenpflegeComponent } from './gartenpflege.component';

const routes: Routes = [{ path: '', component: GartenpflegeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GartenpflegeRoutingModule { }
