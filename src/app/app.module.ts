import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
      { path: 'toevoegen', component: CreateComponent },
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
    CreateComponent,
    ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
