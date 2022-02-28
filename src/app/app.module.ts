import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ErrorModule } from './error/error.module';
import { EventsModule } from './events/events.module';
import { FaqModule } from './faq/faq.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OurstoryModule } from './ourstory/ourstory.module';
import { PartyModule } from './party/party.module';
import { PrivacyModule } from './privacy/privacy.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    EventsModule,
    FaqModule,
    HomeModule,
    OurstoryModule,
    PartyModule,
    PrivacyModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
