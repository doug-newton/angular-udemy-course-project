import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from 'src/app/scenario.model';

@Component({
  selector: 'app-scenario-grid',
  templateUrl: './scenario-grid.component.html',
  styleUrls: ['./scenario-grid.component.css']
})
export class ScenarioGridComponent implements OnInit {

  @Input() scenarios: Scenario[] = []
  @Input() stepColumns: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
