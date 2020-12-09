import { Component, OnInit, Input } from "@angular/core";
import { ShapeInfo } from "../app.component";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.svg",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  @Input() shapeInfo: ShapeInfo;

  constructor() {}

  ngOnInit() {}
}
