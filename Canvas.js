import { FRAME_RATE, MODAL, DEFAULT_PARTICLE_COLOR, DEFAULT_BACKGROUND_COLOR, TITLE, NOTES } from "./Constants";
import { getRandomMode, rootName } from './Modes.js';
import { getRandomNumber } from './Util.js';

var canvas;
var x = window.innerWidth -100;
var y = window.innerHeight - 100;
var easing = 0.05;

export const initCanvas = () => {
    cursor(HAND);
    canvas = createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
}

export const windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

export const mouseMoved = () => {
    canvas.mouseMoved(instructionMotion);
    /*canvas.touchEnded(instructionMotion);*/
}

export const canvasTouched = (action) => {
    canvas.touchStarted(action);
};

export const canvasClicked = (action) => {
    canvas.mouseClicked(action);
    canvas.touchEnded(action);
}

export const canvasPressed = (action) => {
    canvas.mousePressed(action);
    canvas.touchStarted(action);
}

export const canvasReleased = (action) => {
    canvas.mouseReleased(action);
    canvas.touchEnded(action);
}

export const drawParticle = particle => {
    ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
};

const instructionMotion = () => {
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
    
    let targetY = mouseY; 
    let dy = targetY -y;
    y += dy * easing;
    
}

const firstInstructionMotion = (framecount) => {
    y -= 10;
    if (y < 0) {
        y = window.innerHeight;
    } 
}

export const setInstruction = (instruction) => {
    
    if (!instruction) {
        firstInstructionMotion();
        /*stroke('black');
        fill('black');*/
        textSize(20);
        text('clickTo', x, y-32);
        textSize(40);
        text('start', x, y); 
    }
    else if (instruction === 'measure') {
        instructionMotion();
        textSize(20);
        text('click+holdTo', x, y-32);
        textSize(40);
        text(instruction, x, y); 
    }
    else {
        instructionMotion();
        textSize(20);
        text(rootName(), x, y-32);
        textSize(40);
        text(instruction, x, y); 
    }   
};

export const setTitleCanvas = () => {
    background(DEFAULT_BACKGROUND_COLOR);
    textSize(40);
    fill('white');
    stroke('white');
    text('MÚSICA IRRELLEVANT', (getRandomNumber(windowWidth) + 200), windowHeight/2);
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
    text('MÚSICA IRRELLEVANT', (getRandomNumber(windowWidth) + 200), windowHeight/2);
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
