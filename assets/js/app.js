import {Character} from "./Character.js";

const myCharacter = document.querySelector(".character");
const character = new Character(myCharacter);

const jumpButton = document.querySelector(".jump");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

jumpButton.onmousedown = character.jump;
rightButton.onmousedown = character.toRight;
rightButton.onmouseup = character.stop;
leftButton.onmousedown = character.toLeft;
leftButton.onmouseup = character.stop;

jumpButton.ontouchstart = character.jump;
rightButton.ontouchstart = character.toRight;
rightButton.ontouchend = character.stop;
leftButton.ontouchstart = character.toLeft;
leftButton.ontouchend = character.stop;