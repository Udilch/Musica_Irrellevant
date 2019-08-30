import { getRandomNumber } from "./Util";
import { INITIAL_NOTE_SCALE, MODES, SCALE_LENGTH } from "./Constants";
import { drawParticle } from "./Canvas";

const modesLength = Object.keys(MODES).length;

export const initModes = (particles) => {
    Object.keys(MODES).forEach(mode => {
        let note = INITIAL_NOTE_SCALE;
        for (let i = 0; i <= 4; i++) {
            MODES[mode].sequence.forEach(interval => {
                MODES[mode].scale.push(particles[note]);
                note += interval;
            });
        }
    });
    console.log(MODES);
    return MODES;
};

export const stopParticlesInScale = mode =>
    MODES[mode].scale.forEach(particle =>
        particle.stopWhenInScale(width, height)
    );

export const drawParticlesInScale = mode =>
    MODES[mode].scale.forEach(drawParticle);

export const animateScaleParticle = (mode, scaleIndex, frame) =>
    MODES[mode].scale[scaleIndex].myParticleAnimation(frame, SCALE_LENGTH);

export const getRandomMode = () => {
    const modesIndex = getRandomNumber(modesLength);
    const mode = Object.keys(MODES)[modesIndex];
    return MODES[mode];
};

export const getModeScaleLength = mode => MODES[mode].scale.length;
