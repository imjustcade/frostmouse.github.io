import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frost Mouse Studios';
  image = "/assets/mainimages/image1.PNG";
}

let leftLoaded = false;
let rightLoaded = false;

@Injectable()
export class SharedImages {

  leftimg;
  rightimg;
  leftLoaded = false;
  rightLoaded = false;
  setLeftImage(passimg) 
  {
    this.leftimg = document.getElementById("leftimage") as HTMLImageElement;
    this.leftimg.src = passimg;
  }
  setRightImage(passimg)
  {
    this.rightimg = document.getElementById("rightimage") as HTMLImageElement;
    this.rightimg.src = passimg;
  }
}
