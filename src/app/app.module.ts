import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ObservationsListComponent } from './observations-list/observations-list.component';
import { ExpertContactsComponent } from './expert-contacts/expert-contacts.component';
import { SingleObservationComponent } from './single-observation/single-observation.component';
import { AddObservationComponent } from './add-observation/add-observation.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'listobservations', component: ObservationsListComponent },
  { path: 'single_observation/:id/:vulgarName', component: SingleObservationComponent },
  { path: 'new_observation', component: AddObservationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ObservationsListComponent,
    ExpertContactsComponent,
    SingleObservationComponent,
    AddObservationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
