import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GartenpflegeRoutingModule } from './gartenpflege-routing.module';
import { GartenpflegeComponent } from './gartenpflege.component';


@NgModule({
  declarations: [
    GartenpflegeComponent
  ],
  imports: [
    CommonModule,
    GartenpflegeRoutingModule
  ]
})
export class GartenpflegeModule { }
