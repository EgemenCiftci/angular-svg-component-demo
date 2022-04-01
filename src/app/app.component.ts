import { OnInit, Component } from '@angular/core';
import { ShapeInfo } from './shape-info';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  shapeInfo: ShapeInfo;

  ngOnInit() {
    this.shapeInfo = new ShapeInfo('10px', '10px', '30px', '30px', '#0000ff');
  }
}
