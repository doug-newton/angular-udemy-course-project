import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScenarioComponent } from './add-scenario/add-scenario.component';
import { AddStepColumnComponent } from './add-step-column/add-step-column.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScenarioComponent,
    AddStepColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
