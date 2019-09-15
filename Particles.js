import { NOTES, NOTE_LENGTH_FACTOR, FRAME_RATE, ROOT_INDEX, ROOT_LENGTH, MODAL } from "./Constants";
import Particle from "./Particle";
import { getRandomNumber } from "./Util";
import { drawParticle } from "./Canvas";

export const particles = [];

export const initParticles = () => {
    NOTES.forEach(note => particles.push(new Particle(note)));

    return particles;
};

export const activateRandomParticle = frame => {
    const randomParticle = getRandomNumber(NOTES.length);
    const randomNoteLength = getRandomNumber(FRAME_RATE * NOTE_LENGTH_FACTOR);

    particles[randomParticle].startAnimation(frame, randomNoteLength);
};

export const updateParticles = frame =>
    particles.forEach(particle => particle.update(frame, width, height));

export const stopParticles = () =>
    particles.forEach(particle => particle.stop(width, height));

export const drawParticles = () => particles.forEach(drawParticle);

