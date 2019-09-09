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
    setTitleCanvas,
    drawTitle,
    setInstruction,
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
    sortParticlesByPosition,
} from './Modes.js';
import StartAudioContext from 'startaudiocontext/StartAudioContext.js';
import Tone from 'tone';

var state = 'title';
var melodyIndex = 0;
var count = 0;
var chordIndex = 0;
var rootIndex = 0;
var clickFrame = 0;
var instruction = 'measure';

export const setup = () => {
    initCanvas();
    const particles = initParticles();
    initModes(particles);
    document.addEventListener('click', start);
    document.addEventListener('touchend', start);
}

export const start = () => {
    state = 'caos';
    instruction = 'measure';
    StartAudioContext(Tone.context);
    document.addEventListener('mousedown', alterState);
    document.addEventListener('touchstart', alterState);
}

export const alterState = () => {
    state = getRandomMode().name;
    clickFrame = frameCount;
    instruction = state;
}

export const draw = () => {
    if (state === 'title') {
        drawTitleFrame();
    }
    else if (state === 'caos') {
        drawCaosFrame();
    }
    else drawModeAnimationFrame(state);
}

const drawTitleFrame = () => {
    setTitleCanvas();
    setInstruction();
};

const drawCaosFrame = () => {
    setCaosCanvas();
    setInstruction(instruction);
    if (frameShouldActivateParticle(frameCount)) {
        activateRandomParticle(frameCount);
    }
    updateParticles(frameCount);
    drawParticles();
};

const drawModeAnimationFrame = (mode) => {
    if (clickFrame + 1 === frameCount) {
        /*document.removeEventListener('click', alterState);
        document.removeEventListener('touchstart', alterState);*/
        sortParticlesByPosition(mode);  
    }
    
    // draw regular particles
    setCanvasColorsByMode(mode);
    stopParticles();
    drawParticles();
    
    //draw Instruction
    setInstruction(instruction);

    // draw in scale particles
    setDefaultParticleColor();
    stopParticlesInMode(mode);
    drawParticlesInMode(mode);
    

    if (frameShouldAnimateScaleParticle(frameCount)) {
        if (melodyIndex === getModeScaleLength(mode)) {
            melodyIndex = 0;
        }
        animateScaleParticle(mode, melodyIndex, frameCount);
        melodyIndex++;
        count++;
    }
    
    if (frameShouldAnimateChordParticle(frameCount, mode)) {
        if (chordIndex === getModeChordLength(mode)) {
            chordIndex = 0;
        }
        animateChordParticle(mode, chordIndex, frameCount);
        chordIndex++;
        
    }
    
    if (frameShouldAnimateRootParticle(frameCount)) {
        if (rootIndex === getRootLength()) {
            rootIndex = getRandomNumber(5);
        }
        animateRootParticle(rootIndex, frameCount);
        rootIndex++;
    }

    /*if (frameShouldFinishModeAnimation(count, mode)) {
        state = 'caos';
        instruction = 'measure';
        count = 0;
        document.addEventListener('click', alterState);
        document.addEventListener('touchstart', alterState);
    }*/
}
const frameShouldActivateParticle = frame =>
    frame % getRandomNumber(FRAME_RATE * ACTIVATION_FREQUENCY) === 0;

const frameShouldAnimateRootParticle = frame => frame % ROOT_FREQUENCY === 0;

const frameShouldAnimateScaleParticle = frame => frame % SCALE_FREQUENCY === 0;

const frameShouldAnimateChordParticle = (frame, mode) => frame % CHORD_FREQUENCY === 0;

const frameShouldFinishModeAnimation = (count, mode) =>
    count === getModeScaleLength(mode);
