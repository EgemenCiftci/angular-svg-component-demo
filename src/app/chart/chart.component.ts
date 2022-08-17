import { Component, Input } from '@angular/core';
import { ShapeInfo } from '../shape-info';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.svg',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() shapeInfo: ShapeInfo;
}
