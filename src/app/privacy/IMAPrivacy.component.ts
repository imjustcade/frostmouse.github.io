import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ 
    selector: 'app-root',
    templateUrl: 'IMAPrivacy.component.html',
    styleUrls: ['./IMAPrivacy.component.css']
 })
export class IMAPrivacyComponent {
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}