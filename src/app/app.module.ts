import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScenarioComponent } from './scenarios/add-scenario/add-scenario.component';
import { AddStepColumnComponent } from './scenarios/add-step-column/add-step-column.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenarioGridComponent } from './scenarios/scenario-grid/scenario-grid.component';
import { StepCellComponent } from './scenarios/scenario-grid/step-cell/step-cell.component';
import { StepColumnCellComponent } from './scenarios/scenario-grid/step-column-cell/step-column-cell.component';
import { DatesComponent } from './dates/dates.component';
import { ExecutionParamsComponent } from './scenarios/execution-params/execution-params.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScenarioComponent,
    AddStepColumnComponent,
    ScenariosComponent,
    ScenarioGridComponent,
    StepCellComponent,
    StepColumnCellComponent,
    DatesComponent,
    ExecutionParamsComponent
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
