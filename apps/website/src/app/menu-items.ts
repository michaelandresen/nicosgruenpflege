import { RouterLink } from '@angular/router';
import {
  GARTENPFLEGE,
  IMPRESSUM,
  KONTAKT,
  LANDSCHAFTSPFLEGE,
  STARTSEITE,
} from './router-paths';

export interface MenuItem {
  link: RouterLink['routerLink'];
  text: string;
}

export const TopMenu: MenuItem[] = [
  { link: STARTSEITE, text: 'Startseite' },
  { link: LANDSCHAFTSPFLEGE, text: 'Landschaftspflege' },
  { link: GARTENPFLEGE, text: 'Gartenpflege' },
  { link: KONTAKT, text: 'Kontakt' },
];

export const BottomMenu: MenuItem[] = [{ link: IMPRESSUM, text: 'Impressum' }];
