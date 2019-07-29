import { NOTES, FRAME_RATE } from './Constants.js';
import Particle from './Particle.js';
import { getRandomNumber } from './Util.js';
import { soParticules } from './Sound.js';

var particles = [];

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
    NOTES.forEach(note => particles.push(new Particle(note)));
}

window.draw = () => {
    background('lightblue');
    fill('red');
    stroke('red');
    if (frameCount % getRandomNumber(FRAME_RATE * 3) === 1) {
        const randomParticle = getRandomNumber(NOTES.length);
        particles[randomParticle].startAnimation(frameCount, getRandomNumber((frameCount % FRAME_RATE) * 2) + 15);
    }
    particles.forEach(particle => {
        particle.update(frameCount, width, height);
        ellipse(
            particle.xPos, particle.yPos, particle.radius, particle.radius
        );
        soParticules();
       
    });
    text(frameCount, width - 10, 12);
}

