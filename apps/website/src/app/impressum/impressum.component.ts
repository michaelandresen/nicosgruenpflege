import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contact } from '../constants';
import { toPhoneLink } from '../utils';

@Component({
  selector: 'nicosgruenpflege-impressum',
  templateUrl: './impressum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpressumComponent {
  public readonly contact = contact;
  public readonly phoneLink = toPhoneLink(contact.phone);
}
