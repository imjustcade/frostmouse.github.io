import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ 
    selector: 'app-root',
    templateUrl: 'privacy.component.html',
    styleUrls: ['./privacy.component.css']
 })
export class PrivacyComponent {
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}