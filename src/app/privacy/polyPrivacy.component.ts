import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ 
    selector: 'app-root',
    templateUrl: 'polyPrivacy.component.html',
    styleUrls: ['./polyPrivacy.component.css']
 })
export class PolyPrivacyComponent {
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}