import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
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
            import('./impressum/impressum.module').then(
              (m) => m.ImpressumModule
            ),
        },
        {
          path: '**',
          loadChildren: () =>
            import('./not-found/not-found.module').then(
              (m) => m.NotFoundModule
            ),
        },
      ],
      {
        initialNavigation: 'enabledBlocking',
        preloadingStrategy: PreloadAllModules,
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
