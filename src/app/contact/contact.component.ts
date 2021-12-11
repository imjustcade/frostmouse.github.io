import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component({ templateUrl: 'contact.component.html' })
export class ContactComponent {
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }}