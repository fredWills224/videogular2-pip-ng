import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VgPipComponent } from './vg-pip/vg-pip.component';

@NgModule({
  declarations: [
    AppComponent,
    VgPipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
