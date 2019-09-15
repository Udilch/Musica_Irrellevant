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
    canvasTouched,
    canvasPressed,
    canvasClicked,
    canvasReleased,
    mouseMoved,
} from './Canvas.js';
import {
    createInfo,
    infoExpand,
    infoCollapse,
} from './Info.js';
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
    speedFactor,
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
var note = 0;

export const setup = () => {
    initCanvas();
    createInfo();
    const particles = initParticles();
    initModes(particles);
    canvasClicked(start);  
}

export const start = () => {
    state = 'caos';
    instruction = 'measure';
    StartAudioContext(Tone.context).then(function(){
        //started  
    });
    canvasPressed(alterState);
    canvasReleased(start);
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
};

export const windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
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
}

const frameShouldActivateParticle = frame =>
    frame % getRandomNumber(FRAME_RATE * getRandomNumber(6)) === 0;

const frameShouldAnimateRootParticle = frame => frame % (ROOT_FREQUENCY + speedFactor()) === 0;

const frameShouldAnimateScaleParticle = frame => frame % (SCALE_FREQUENCY + speedFactor()) === 0;

const frameShouldAnimateChordParticle = (frame, mode) => frame % (CHORD_FREQUENCY + speedFactor()) === 0;

const frameShouldFinishModeAnimation = (count, mode) =>
    count === getModeScaleLength(mode);
