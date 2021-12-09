import { templateJitUrl } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component
({ 
    templateUrl: 'Vain Miner.component.html',
    styleUrls: ['./Vain Miner.component.css']
})
export class VainMinerComponent {
    constructor(public dialog: MatDialog) {}
    images = 
    [
        "/assets/Vain Miner/1.PNG",
        "/assets/Vain Miner/2.PNG",
        "/assets/Vain Miner/3.PNG",
        "/assets/Vain Miner/4.PNG",
        "/assets/Vain Miner/5.PNG"
    ]

    openDialog(imageName) 
    {
        this.dialog.open(openImageDialog, {
            data: {
              image: imageName,
              activeImage: this.images.indexOf(imageName)
            },
            panelClass: 'custom-dialog-container',
            backdropClass: 'backdropBackground'
        });
    }

    video = "/assets/Vain Miner/video.mp4"
}

@Component({
    selector: 'openImage',
    templateUrl: 'openImage.html',
    styleUrls: ['openImage.css']
  })
  export class openImageDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data) {}
    
    images = 
    [
        "/assets/Vain Miner/1.PNG",
        "/assets/Vain Miner/2.PNG",
        "/assets/Vain Miner/3.PNG",
        "/assets/Vain Miner/4.PNG",
        "/assets/Vain Miner/5.PNG"
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