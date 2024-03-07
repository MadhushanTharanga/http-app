import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { NewComponent } from './components/new/new.component';
// import { FineComponent } from './components/fine/fine.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FindComponent } from './components/find/find.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    NewComponent,
    // FineComponent,
    UpdateComponent,
    DeleteComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Meter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
