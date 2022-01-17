import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { PhpGuard } from './php.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundComponent,
        canActivate: [PhpGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
