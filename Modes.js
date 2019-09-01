import { getRandomNumber } from "./Util";
import { INITIAL_NOTE_SCALE, MODAL, SCALE_LENGTH, CHORD_LENGTH } from "./Constants";
import { drawParticle } from "./Canvas";

const modesLength = Object.keys(MODAL.modes).length;

export const initModes = (particles) => {
    MODAL.modalRoot = getRandomNumber(11) + 36;
    console.log(Object.keys(MODAL.modes));
    Object.keys(MODAL.modes).forEach(mode => {
        let note = MODAL.modalRoot;
        for (let i = 0; i <= 4; i++) {
            MODAL.modes[mode].sequence.forEach(grade => {
                MODAL.modes[mode].scale.push(particles[note]);
                note += grade;
            });
        }
        note = MODAL.modalRoot + MODAL.modes[mode].grade;
        for (let i = 0; i <= 2; i++) {
            MODAL.chordInterval.forEach(interval => {
                MODAL.modes[mode].modalChord.push(particles[note]);
                note += interval;
            });
        }
        MODAL.modes[mode].scale.push(particles[MODAL.modalRoot + 60])
    });
    console.log(MODAL);
    return MODAL;
};

export const stopParticlesInScale = mode =>
    MODAL.modes[mode].scale.forEach(particle =>
        particle.stopWhenInScale(width, height)
    );

export const drawParticlesInScale = mode =>
    MODAL.modes[mode].scale.forEach(drawParticle);

export const animateScaleParticle = (mode, scaleIndex, frame) =>
    MODAL.modes[mode].scale[scaleIndex].myParticleAnimation(frame, SCALE_LENGTH);

export const animateChordParticle = (mode, chordIndex, frame) => {
    MODAL.modes[mode].modalChord[getRandomNumber(12)].myParticleAnimation(frame, CHORD_LENGTH);
}
    
export const getRandomMode = () => {
    const modesIndex = getRandomNumber(modesLength);
    const mode = Object.keys(MODAL.modes)[modesIndex];
    return MODAL.modes[mode];
};

export const getModeScaleLength = mode => MODAL.modes[mode].scale.length;

export const getModeChordLength = mode => MODAL.modes[mode].modalChord.length;

