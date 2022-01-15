import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KontaktComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KontaktRoutingModule
  ]
})
export class KontaktModule { }
