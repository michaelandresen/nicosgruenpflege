import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PhpGuard implements CanActivate {
  public constructor(
    private readonly router: Router,
    private readonly meta: Meta
  ) {}
  public canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    this.meta.addTag({ robots: 'noindex' });
    const url = state.url;
    const suffix = '.php';
    return url.endsWith(suffix)
      ? this.router.createUrlTree([
          url.substring(0, url.length - suffix.length),
        ])
      : true
  }
}
