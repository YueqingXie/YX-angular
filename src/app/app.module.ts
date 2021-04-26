import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { SteakComponent } from './steak/steak.component';
import { ModalComponent } from './modal/modal.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    SteakComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule, //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
