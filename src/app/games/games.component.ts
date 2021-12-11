import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedImages } from '../app.component';

@Component
({ 
    templateUrl: 'games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent {
    gameList = games;
    constructor(private shareimg: SharedImages) {
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
}

interface Game 
{
    name: string;
    image: string;
}

let games: Game[] = [];

let VainMiner: Game = {
    name: "Vain Miner",
    image: "/assets/Vain Miner/1.PNG"
}

games.push(VainMiner);