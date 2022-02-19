import { Contact } from "./contact";
import { MenuItem } from "./menu-items";

export const STARTSEITE = '';
export const LANDSCHAFTSPFLEGE = 'landschaftspflege';
export const GARTENPFLEGE = 'gartenpflege';
export const KONTAKT = 'kontakt';
export const IMPRESSUM = 'impressum';

export const contact: Contact = {
  name: 'Nico Andresen',
  street: 'Jürgenskoppel 29b',
  postalCode: '24253',
  city: 'Probsteierhagen',
  email: 'nicoandresen@gmx.de',
  phone: '0152 04132734',
};

export const topMenu: MenuItem[] = [
  { link: STARTSEITE, text: 'Startseite' },
  { link: LANDSCHAFTSPFLEGE, text: 'Landschaftspflege' },
  { link: GARTENPFLEGE, text: 'Gartenpflege' },
  { link: KONTAKT, text: 'Kontakt' },
];

export const bottomMenu: MenuItem[] = [{ link: IMPRESSUM, text: 'Impressum' }];
