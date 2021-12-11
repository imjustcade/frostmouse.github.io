import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ templateUrl: 'about.component.html' })
export class AboutComponent {
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}