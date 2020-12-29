import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './shared/search/search.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    MainLayoutComponent,
    SearchComponent,
    ModalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
