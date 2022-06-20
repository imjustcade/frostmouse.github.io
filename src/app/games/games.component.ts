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
    link: string;
    image: string;
}

let games: Game[] = [];

let IMAMiner: Game = {
    name: "IMA Miner",
    link: "IMAMiner",
    image: "/assets/IMAMiner/1.jpg"
}

let Polyvade: Game = {
    name: "Polyvade",
    link: "Polyvade",
    image:"assets/Polyvade/1.jpg"
}

games.push(IMAMiner);
games.push(Polyvade);