import {
    FRAME_RATE,
    ACTIVATION_FREQUENCY,
    ROOT_FREQUENCY,
    SCALE_FREQUENCY,
    CHORD_FREQUENCY,
    COUNT_DOWN,
} from './Constants.js';
import { getRandomNumber } from './Util.js';
import {
    initCanvas,
    setCaosCanvas,
    setDefaultParticleColor,
    setCanvasColorsByMode,
} from './Canvas.js';
import {
    initParticles,
    activateRandomParticle,
    updateParticles,
    drawParticles,
    animateRoot,
    stopParticles,
} from './Particles.js';
import {
    initModes,
    getRandomMode,
    stopParticlesInMode,
    drawParticlesInMode,
    getModeScaleLength,
    getModeChordLength,
    getRootLength,
    animateScaleParticle,
    animateChordParticle,
    animateRootParticle,
} from './Modes.js';
import Tone from 'tone';


var state = 'caos';
var melodyIndex = 0;
var chordIndex = 0;
var rootIndex = 0;

export const setup = () => {
    document.addEventListener('mouseover', Tone.context.resume());
    initCanvas();
    const particles = initParticles();
    initModes(particles);
}

const alterState = () => {
    state = getRandomMode().name;
}

document.addEventListener('click', alterState);
document.addEventListener('touchstart', alterState);

export const draw = () => {
    text(frameCount, width - 10, 12);
    state === 'caos' ? drawCaosFrame() : drawModeAnimationFrame(state);
}

const drawCaosFrame = () => {
    setCaosCanvas();
    if (frameShouldActivateParticle(frameCount)) {
        activateRandomParticle(frameCount);
    }
    updateParticles(frameCount);
    drawParticles();
};

const drawModeAnimationFrame = (mode) => {
    document.removeEventListener('click', alterState);
    document.removeEventListener('touchstart', alterState);
    
    // draw regular particles
    setCanvasColorsByMode(mode);
    stopParticles();
    drawParticles();

    // draw in scale particles
    setDefaultParticleColor();
    stopParticlesInMode(mode);
    drawParticlesInMode(mode);

    if (frameShouldAnimateScaleParticle(frameCount)) {
        animateScaleParticle(mode, melodyIndex, frameCount);
        melodyIndex++;
    }
    
    if (frameShouldAnimateChordParticle(frameCount, mode)) {
        if (chordIndex === getModeChordLength(mode)) {
            chordIndex = 0;
        }
        animateChordParticle(mode, chordIndex, frameCount);
        chordIndex++;
        
    }
    
    if (frameShouldAnimateRootParticle(frameCount)) {
        if (rootIndex === 5) {
            rootIndex = getRandomNumber(5);
        }
        animateRootParticle(rootIndex, frameCount);
        rootIndex++;
    }

    if (frameShouldFinishModeAnimation(melodyIndex, mode)) {
        state = 'caos';
        melodyIndex = 0;
        document.addEventListener('click', alterState);
        document.addEventListener('touchstart', alterState);
    }
}
const frameShouldActivateParticle = frame =>
    frame % getRandomNumber(FRAME_RATE * ACTIVATION_FREQUENCY) === 0;

const frameShouldAnimateRootParticle = frame => frame % ROOT_FREQUENCY === 0;

const frameShouldAnimateScaleParticle = frame => frame % SCALE_FREQUENCY === 0;

const frameShouldAnimateChordParticle = (frame, mode) => frame % CHORD_FREQUENCY === 0;

const frameShouldFinishModeAnimation = (melodyIndex, mode) =>
    melodyIndex === COUNT_DOWN;
