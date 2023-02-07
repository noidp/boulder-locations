import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
      { path: 'locations/:locationId', component: LocationDetailsComponent },
      { path: 'edit/:locationId', component: EditComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LocationListComponent,
    LocationDetailsComponent,
    EditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
