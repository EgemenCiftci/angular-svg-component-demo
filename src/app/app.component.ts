import { OnInit, Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  shapeInfo: ShapeInfo;

  ngOnInit() {
    this.shapeInfo = new ShapeInfo("10px", "10px", "30px", "30px", "blue");
  }

  onclick() {
    console.log("onclick");
    if (this.shapeInfo.fill == "red") {
      this.shapeInfo.fill = "blue";
      this.shapeInfo.x = "10px";
      this.shapeInfo.y = "10px";
      this.shapeInfo.width = "30px";
      this.shapeInfo.height = "30px";
    } else {
      this.shapeInfo.fill = "red";
      this.shapeInfo.x = "20px";
      this.shapeInfo.y = "20px";
      this.shapeInfo.width = "50px";
      this.shapeInfo.height = "50px";
    }
  }
}

export class ShapeInfo {
  constructor(
    public x: string,
    public y: string,
    public width: string,
    public height: string,
    public fill: string
  ) {}
}
