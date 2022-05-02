import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/admin/header/main-nav/main-nav.component';
import { MainLeftNavComponent } from './components/admin/header/main-left-nav/main-left-nav.component';
import { MainRightNavComponent } from './components/admin/header/main-right-nav/main-right-nav.component';
import { MainSearchNavComponent } from './components/admin/header/main-search-nav/main-search-nav.component';
import { MessagesNavComponent } from './components/admin/header/messages-nav/messages-nav.component';
import { NotificationsNavComponent } from './components/admin/header/notifications-nav/notifications-nav.component';
import { LeftNavComponent } from './components/admin/sidebar/left-nav/left-nav.component';
import { BrandLogoComponent } from './components/admin/sidebar/brand-logo/brand-logo.component';
import { NavMenuComponent } from './components/admin/sidebar/nav-menu/nav-menu.component';
import { ExampleHomeComponent } from './components/example-home/example-home.component';
import { FooterComponent } from './components/admin/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainLeftNavComponent,
    MainRightNavComponent,
    MainSearchNavComponent,
    MessagesNavComponent,
    NotificationsNavComponent,
    LeftNavComponent,
    BrandLogoComponent,
    NavMenuComponent,
    ExampleHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
