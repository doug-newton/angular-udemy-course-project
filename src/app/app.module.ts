import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScenarioComponent } from './scenarios/add-scenario/add-scenario.component';
import { AddStepColumnComponent } from './scenarios/add-step-column/add-step-column.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScenarioComponent,
    AddStepColumnComponent,
    ScenariosComponent
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
