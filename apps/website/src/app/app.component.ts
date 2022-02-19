import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contact, topMenu, bottomMenu } from './constants';
import { toPhoneLink } from './utils';

@Component({
  selector: 'nicosgruenpflege-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly contact = contact;
  public readonly phoneLink = toPhoneLink(contact.phone);
  public readonly topMenuItems = topMenu;
  public readonly bottomMenuItems = bottomMenu;
}
