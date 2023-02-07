import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: LocationListComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, LocationListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
