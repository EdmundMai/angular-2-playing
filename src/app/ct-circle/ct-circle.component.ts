import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ct-circle',
  templateUrl: 'ct-circle.component.html',
  styleUrls: ['ct-circle.component.css']
})
export class CtCircleComponent {
  @Input() metric: Object;
  @Input() color: string;
}
