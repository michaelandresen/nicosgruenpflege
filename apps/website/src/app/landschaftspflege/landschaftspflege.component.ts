import { Component, OnInit } from '@angular/core';
import { KONTAKT } from '../router-paths';

@Component({
  selector: 'nicosgruenpflege-landschaftspflege',
  templateUrl: './landschaftspflege.component.html',
  styleUrls: ['./landschaftspflege.component.css'],
})
export class LandschaftspflegeComponent {
  public readonly kontaktLink = `/${KONTAKT}`;
}
