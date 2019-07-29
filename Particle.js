import {
    INITIAL_RADIUS,
    MAXIMUM_RADIUS,
    FRAME_RATE
} from './Constants.js';

export default class Particle {
    constructor(note) {
        this.note = note;
        this.xInc = Math.random() / 50;
        this.yInc = Math.random() / 50;
        this.xOff = 0;
        this.yOff = 0;
        this.radius = INITIAL_RADIUS;
        this.xPos = 0;
        this.yPos = 0;
        this.noteLength = 0;
        this.initialFrame = 0;
    }

    update(frameCount, width, height) {
        this.xPos = noise(this.xOff) * width;
        this.yPos = noise(this.yOff) * height;
        this.xOff += this.xInc;
        this.yOff += this.yInc;
        this.radius = this.noteLength ? this.getActiveRadius(frameCount) : INITIAL_RADIUS;
        if (this.noteLength === frameCount - this.initialFrame) {
            this.finishAnimation();
        }
    }

    getActiveRadius(frameCount) {
        const currentAnimationFrame = frameCount - this.initialFrame;
        console.log({
            frameCount,
            currentAnimationFrame,
            initialFrame: this.initialFrame,
            noteLength: this.noteLength,
        });
        if (currentAnimationFrame < this.noteLength / 2) {
            return this.easeInOut(currentAnimationFrame, INITIAL_RADIUS, MAXIMUM_RADIUS, this.noteLength / 4);
        }
        return this.easeInOut(currentAnimationFrame, MAXIMUM_RADIUS, INITIAL_RADIUS, 3 * this.noteLength / 4);
    }

    easeInOut(time, startValue, change, duration) {
        time /= duration / 2;
        if (time < 1)  {
             return change / 2 * time * time + startValue;
        }
   
        time--;
        return -change / 2 * (time * (time - 2) - 1) + startValue;
    }

    startAnimation(initialFrame, noteLength) {
        if (!this.noteLength) {
            this.initialFrame = initialFrame;
            this.noteLength = noteLength;
        }
    }

    finishAnimation() {
        this.initialFrame = 0;
        this.noteLength = 0;
    }

    getAmplitude() {
        return this.radius;
    }
};