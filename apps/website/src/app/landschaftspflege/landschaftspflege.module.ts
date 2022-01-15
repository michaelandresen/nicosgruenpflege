import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandschaftspflegeRoutingModule } from './landschaftspflege-routing.module';
import { LandschaftspflegeComponent } from './landschaftspflege.component';


@NgModule({
  declarations: [
    LandschaftspflegeComponent
  ],
  imports: [
    CommonModule,
    LandschaftspflegeRoutingModule
  ]
})
export class LandschaftspflegeModule { }
