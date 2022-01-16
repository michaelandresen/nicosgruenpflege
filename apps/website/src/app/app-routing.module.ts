import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GARTENPFLEGE,
  IMPRESSUM,
  KONTAKT,
  LANDSCHAFTSPFLEGE,
  STARTSEITE,
} from './router-paths';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
      {
        path: STARTSEITE,
        pathMatch: 'full',
        loadChildren: () =>
          import('./welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: LANDSCHAFTSPFLEGE,
        loadChildren: () =>
          import('./landschaftspflege/landschaftspflege.module').then(
            (m) => m.LandschaftspflegeModule
          ),
      },
      {
        path: GARTENPFLEGE,
        loadChildren: () =>
          import('./gartenpflege/gartenpflege.module').then(
            (m) => m.GartenpflegeModule
          ),
      },
      {
        path: KONTAKT,
        loadChildren: () =>
          import('./kontakt/kontakt.module').then((m) => m.KontaktModule),
      },
      {
        path: IMPRESSUM,
        loadChildren: () =>
          import('./impressum/impressum.module').then((m) => m.ImpressumModule),
      },
    ],
    {
      initialNavigation: 'enabledBlocking'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
