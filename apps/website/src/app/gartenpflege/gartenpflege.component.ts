import { Component, OnInit } from '@angular/core';
import { KONTAKT } from '../router-paths';

@Component({
  selector: 'nicosgruenpflege-gartenpflege',
  templateUrl: './gartenpflege.component.html',
  styleUrls: ['./gartenpflege.component.css'],
})
export class GartenpflegeComponent {
  public readonly kontaktLink = `/${KONTAKT}`;
}
