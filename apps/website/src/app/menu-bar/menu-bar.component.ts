import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../menu-items';

@Component({
  selector: 'nicosgruenpflege-menu-bar[items]',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @Input()
  public items!: MenuItem[];

}
