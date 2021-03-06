import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KONTAKT } from '../constants';

@Component({
  selector: 'nicosgruenpflege-gartenpflege',
  templateUrl: './gartenpflege.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GartenpflegeComponent {
  public readonly kontaktLink = `/${KONTAKT}`;
}
