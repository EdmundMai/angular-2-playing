import { Component } from '@angular/core';
import { CtCircleComponent } from "./ct-circle/ct-circle.component";

@Component({
  moduleId: module.id,
  selector: 'angular-two-app',
  templateUrl: 'angular-two.component.html',
  styleUrls: ['angular-two.component.css'],
  directives: [CtCircleComponent]
})
export class AngularTwoAppComponent {
  public engagementMetric = { name: 'Engagements', value: '517K' };
  public potentialImpressionsMetric = { name: 'Potential Impressions', value: '71MM' };
  public rivMetric = { name: 'Return in Value', value: '2.5X' };
}
