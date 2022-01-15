import { Component } from '@angular/core';
import { BottomMenu, TopMenu } from './menu-items';

@Component({
  selector: 'nicosgruenpflege-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly topMenuItems = TopMenu;
  public readonly bottomMenuItems = BottomMenu;
}
