import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ 
    selector: 'app-root',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
 })
export class HomeComponent {
    title='Frost Mouse Studios';
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}