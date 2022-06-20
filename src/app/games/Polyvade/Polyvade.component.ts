import { templateJitUrl } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { SharedImages } from 'src/app/app.component';

@Component
({ 
    templateUrl: 'Polyvade.component.html',
    styleUrls: ['./Polyvade.component.css']
})
export class PolyvadeComponent {
    constructor(public dialog: MatDialog, private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/Polyvade/side1.PNG");
        shareimg.setRightImage("/assets/Polyvade/side2.PNG");
    }

    images = 
    [
        "/assets/Polyvade/1.jpg",
        "/assets/Polyvade/2.jpg",
        "/assets/Polyvade/3.jpg",
        "/assets/Polyvade/4.jpg",
        "/assets/Polyvade/5.jpg"
    ]

    openDialog(imageName) 
    {
        this.dialog.open(polyOpenImageDialog, {
            data: {
              image: imageName,
              activeImage: this.images.indexOf(imageName)
            },
            panelClass: 'custom-dialog-container',
            backdropClass: 'backdropBackground'
        });
        
    }
    

    video = "https://youtu.be/7n6YF25gEsA"
}

@Component({
    selector: 'openImage',
    templateUrl: 'openImage.html',
    styleUrls: ['openImage.css']
  })
  export class polyOpenImageDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data) {}
    
    images = 
    [
        "/assets/Polyvade/1.jpg",
        "/assets/Polyvade/2.jpg",
        "/assets/Polyvade/3.jpg",
        "/assets/Polyvade/4.jpg",
        "/assets/Polyvade/5.jpg"
    ]

    activeImage = this.data.activeImage;

    upImage()
    {
        let img = document.getElementById("disImage") as HTMLImageElement;
        if (this.activeImage === 4)
        {
            this.activeImage = 0;
        }
        else 
        {
            this.activeImage += 1;
        }
        img.src = this.images[this.activeImage];
    }
    downImage()
    {
        let img = document.getElementById("disImage") as HTMLImageElement;
        if (this.activeImage === 0)
        {
            this.activeImage = 4;
        }
        else 
        {
            this.activeImage -= 1;
        }
        img.src = this.images[this.activeImage];
    }
}