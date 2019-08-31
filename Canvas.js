import { FRAME_RATE, MODAL, DEFAULT_PARTICLE_COLOR, DEFAULT_BACKGROUND_COLOR } from "./Constants";

export const initCanvas = () => {
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

export const setCaosCanvas = () => {
    background(DEFAULT_BACKGROUND_COLOR);
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
}

export const setCanvasColorsByMode = mode => {
    background(MODAL.modes[mode].backgroundColor);
    fill(MODAL.modes[mode].color);
    stroke(MODAL.modes[mode].color);
}

export const setDefaultParticleColor = () => {
    fill(DEFAULT_PARTICLE_COLOR);
    stroke(DEFAULT_PARTICLE_COLOR);
}
