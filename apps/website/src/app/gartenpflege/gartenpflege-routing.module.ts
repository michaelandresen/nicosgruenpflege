import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GartenpflegeComponent } from './gartenpflege.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: GartenpflegeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class GartenpflegeRoutingModule {}
