import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandschaftspflegeComponent } from './landschaftspflege.component';

const routes: Routes = [{ path: '', component: LandschaftspflegeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandschaftspflegeRoutingModule { }
