import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { NameScreenComponent } from './name-screen/name-screen.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    NameScreenComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
