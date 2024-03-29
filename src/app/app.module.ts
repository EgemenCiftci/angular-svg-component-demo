import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
