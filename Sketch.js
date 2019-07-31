import { NOTES, FRAME_RATE, ACTIVATION_FREQUENCY, NOTE_LENGTH_FACTOR } from './Constants.js';
import Particle from './Particle.js';
import { getRandomNumber } from './Util.js';

export const setup = particles => () => {
    createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
    NOTES.forEach(note => particles.push(new Particle(note)));
}

export const draw = particles => () => {
    background('lightblue');
    fill('red');
    stroke('red');
    if (frameCount % getRandomNumber(FRAME_RATE * ACTIVATION_FREQUENCY) === 1) {
        const randomParticle = getRandomNumber(NOTES.length);
        particles[randomParticle].startAnimation(frameCount, getRandomNumber((frameCount % FRAME_RATE) * NOTE_LENGTH_FACTOR));
    }
    particles.forEach(particle => {
        particle.update(frameCount, width, height);
        ellipse(
            particle.xPos, particle.yPos, particle.radius, particle.radius
        );
    });
    text(frameCount, width - 10, 12);
}

