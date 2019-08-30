import {
    INITIAL_RADIUS,
    MAXIMUM_RADIUS,
    FRAME_RATE,
    PARTICLE_INCREMENT_FACTOR
} from './Constants.js';
import Sound from './Sound.js';

export default class Particle {
    constructor(note) {
        this.note = note;
        this.xInc = Math.random() / PARTICLE_INCREMENT_FACTOR;
        this.yInc = Math.random() / PARTICLE_INCREMENT_FACTOR;
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
        if (this.sound) {
            this.sound.updateSound(frameCount, this.xPos, this.yPos, this.xOff, this.yOff,this.radius);
        }
    }
    
    stop(width,height){
        this.xPos = noise(this.xOff) * width;
        this.yPos = noise(this.yOff) * height;
        this.radius = INITIAL_RADIUS;
    }
    
    myParticleStop(width,height){
        this.xPos = noise(this.xOff) * width;
        this.yPos = noise(this.yOff) * height;
        this.radius = this.noteLength ? this.getActiveRadius(frameCount) : INITIAL_RADIUS;
        if (this.noteLength === frameCount - this.initialFrame) {
            this.finishAnimation();
        } 
        if (this.sound) {
            this.sound.updateSound(frameCount, this.xPos, this.yPos, this.xOff, this.yOff,this.radius);
        }
    }

    getActiveRadius(frameCount) {
        const currentAnimationFrame = frameCount - this.initialFrame;

        if (currentAnimationFrame <= Math.floor(this.noteLength / 2)) {
            return this.easeInOut(currentAnimationFrame, INITIAL_RADIUS, MAXIMUM_RADIUS, Math.floor(this.noteLength / 2));
        }
        return MAXIMUM_RADIUS - this.easeInOut(currentAnimationFrame - Math.floor(this.noteLength / 2), 0, MAXIMUM_RADIUS - INITIAL_RADIUS, Math.floor(this.noteLength / 2));
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
            this.sound = new Sound(this.note, noteLength);
        }
    }

    finishAnimation() {
        this.initialFrame = 0;
        this.noteLength = 0;
        delete this.sound;
    }

    getAmplitude() {
        console.log(this.radius);
        return this.radius;
    }
    
    myParticleAnimation(initialFrame, noteLength) {
        this.initialFrame = initialFrame;
        this.noteLength = noteLength;
        this.sound = new Sound(this.note, this.noteLength);   
    }
};
