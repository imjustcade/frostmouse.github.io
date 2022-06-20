import { templateJitUrl } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { SharedImages } from 'src/app/app.component';

@Component
({ 
    templateUrl: 'IMAMiner.component.html',
    styleUrls: ['./IMAMiner.component.css']
})
export class IMAMinerComponent {
    constructor(public dialog: MatDialog, private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/IMAMiner/side1.PNG");
        shareimg.setRightImage("/assets/IMAMiner/side2.PNG");
    }

    images = 
    [
        "/assets/IMAMiner/1.jpg",
        "/assets/IMAMiner/2.jpg",
        "/assets/IMAMiner/3.jpg",
        "/assets/IMAMiner/4.jpg",
        "/assets/IMAMiner/5.jpg"
    ]

    openDialog(imageName) 
    {
        this.dialog.open(IMAOpenImageDialog, {
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
  export class IMAOpenImageDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data) {}
    
    images = 
    [
        "/assets/IMAMiner/1.jpg",
        "/assets/IMAMiner/2.jpg",
        "/assets/IMAMiner/3.jpg",
        "/assets/IMAMiner/4.jpg",
        "/assets/IMAMiner/5.jpg"
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