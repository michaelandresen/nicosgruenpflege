import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KONTAKT } from '../router-paths';

@Component({
  selector: 'nicosgruenpflege-landschaftspflege',
  templateUrl: './landschaftspflege.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandschaftspflegeComponent {
  public readonly kontaktLink = `/${KONTAKT}`;
}
