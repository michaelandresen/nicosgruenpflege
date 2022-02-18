import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../menu-items';
import { BehaviorSubject, Subscription } from 'rxjs';

interface ViewModel {
  items: MenuItem[];
  isMobileView: boolean;
  isMenuOpened: boolean;
}

@Component({
  selector: 'nicosgruenpflege-menu-bar[items]',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent implements OnDestroy {
  public readonly menuIcon = faBars;

  public readonly viewModel$ = new BehaviorSubject<ViewModel>({
    items: [],
    isMobileView: true,
    isMenuOpened: false,
  });

  @Input()
  public set items(value: MenuItem[]) {
    this.updateViewModel({items: value});
  }

  private readonly subscriptions = new Subscription();

  public constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.subscriptions.add(breakpointObserver.observe('(max-width:600px)').subscribe((value) => {
      this.updateViewModel({isMobileView: value.matches})
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public itemClicked(event: MouseEvent): void {
    if (!this.viewModel$.value.isMenuOpened) {
      event.preventDefault();
    }
    this.toggleMenu();
  }

  public toggleMenu(): void {
    this.updateViewModel({
      isMenuOpened: !this.viewModel$.value.isMenuOpened
    });
  }

  private updateViewModel(data: Partial<ViewModel>): void {
    this.viewModel$.next({
      ...this.viewModel$.value,
      ...data
    });
  }
}
