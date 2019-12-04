import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ObservationsListComponent } from './observations-list/observations-list.component';
import { ExpertContactsComponent } from './expert-contacts/expert-contacts.component';
import { SingleObservationComponent } from './single-observation/single-observation.component';
import { AddObservationComponent } from './add-observation/add-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ObservationsListComponent,
    ExpertContactsComponent,
    SingleObservationComponent,
    AddObservationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
