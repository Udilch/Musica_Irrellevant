import {
    FRAME_RATE,
    ACTIVATION_FREQUENCY,
    ROOT_FREQUENCY,
    SCALE_FREQUENCY,
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
    stopParticlesInScale,
    drawParticlesInScale,
    getModeScaleLength,
    animateScaleParticle,
} from './Modes.js';


var state = 'caos';
var scaleIndex = 0;

export const setup = () => {
    initCanvas();
    const particles = initParticles();
    initModes(particles);
}

const alterState = () => {
    state = getRandomMode().name;
}

document.addEventListener('click', alterState);

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

    // draw regular particles
    setCanvasColorsByMode(mode);
    stopParticles();
    drawParticles();

    // draw in scale particles
    setDefaultParticleColor();
    stopParticlesInScale(mode);
    drawParticlesInScale(mode);

    if (frameShouldAnimateRootParticle(frameCount)) {
        animateRoot(frameCount);
    }

    if (frameShouldAnimateScaleParticle(frameCount)) {
        animateScaleParticle(mode, scaleIndex, frameCount);
        scaleIndex++;
    }

    if (frameShouldFinishModeAnimation(scaleIndex, mode)) {
        state = 'caos';
        scaleIndex = 0;
        document.addEventListener('click', alterState);
    }
}
const frameShouldActivateParticle = frame =>
    frame % getRandomNumber(FRAME_RATE * ACTIVATION_FREQUENCY) === 0;

const frameShouldAnimateRootParticle = frame => frame % ROOT_FREQUENCY === 0;

const frameShouldAnimateScaleParticle = frame => frame % SCALE_FREQUENCY === 0;

const frameShouldFinishModeAnimation = (scaleIndex, mode) =>
    scaleIndex === getModeScaleLength(mode);
