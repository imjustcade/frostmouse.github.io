import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component
({ 
    templateUrl: 'games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent {
    gameList = games;
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