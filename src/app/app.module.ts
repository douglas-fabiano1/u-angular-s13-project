import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter(),
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
