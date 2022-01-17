import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandschaftspflegeComponent } from './landschaftspflege.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LandschaftspflegeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class LandschaftspflegeRoutingModule {}
