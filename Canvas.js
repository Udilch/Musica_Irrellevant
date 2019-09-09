import { FRAME_RATE, MODAL, DEFAULT_PARTICLE_COLOR, DEFAULT_BACKGROUND_COLOR, TITLE } from "./Constants";
import img from './Images/ActivarSo.svg';
import { getRandomMode } from './Modes.js';
import { getRandomNumber } from './Util.js';

export const initCanvas = () => {
    noCursor();
    createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
}

export const drawParticle = particle => {
    ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
}

export const setInstruction = (instruction) => {
    if (!instruction) {
        ellipse(mouseX,mouseY);
        text('start', mouseX, mouseY-100);  
    }
    textSize(40);
    text(instruction, mouseX, mouseY - 100);
}

export const setTitleCanvas = () => {
    background(DEFAULT_BACKGROUND_COLOR);
    fill('white');
    stroke('white');
    text('MÚSICA IRRELLEVANT', getRandomNumber(windowWidth) + 200, windowHeight/2);
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
    textSize(40);
    text('MÚSICA IRRELLEVANT', getRandomNumber(windowWidth) + 200, windowHeight/2);
}

export const setCaosCanvas = () => {
    background(DEFAULT_BACKGROUND_COLOR);
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
}

export const setCanvasColorsByMode = (mode) => {
    background(MODAL.modes[mode].backgroundColor);
    fill(MODAL.modes[mode].color);
    stroke(MODAL.modes[mode].color);
}

export const setDefaultParticleColor = () => {
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
}
