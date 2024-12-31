import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoPageComponent } from './components/photo-page/photo-page.component';
import { SpecialPageComponent } from './components/special-page/special-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoPageComponent,
    SpecialPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
