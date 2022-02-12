import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    WelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
