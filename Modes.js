import { getRandomNumber } from "./Util";
import { MODAL, SCALE_LENGTH, CHORD_LENGTH, OCTAVE, ROOT_LENGTH } from "./Constants";
import { drawParticle } from "./Canvas";

const modesLength = Object.keys(MODAL.modes).length;

export const initModes = (particles) => {
    MODAL.modalRoot.root = getRandomNumber(11);
    let note = MODAL.modalRoot.root;
    for (let i = 0; i <= 6; i++) {
            MODAL.modalRoot.scale.push(particles[note]);
            note += OCTAVE;
    };
    Object.keys(MODAL.modes).forEach(mode => {
        note = MODAL.modalRoot.root + (OCTAVE * 4);
        for (let i = 0; i <= 3; i++) {
            MODAL.modes[mode].sequence.forEach(grade => {
                MODAL.modes[mode].scale.push(particles[note]);
                note += grade;
            });
        }
        note = MODAL.modalRoot.root + MODAL.modes[mode].grade + OCTAVE * 2;
        for (let i = 0; i <= 3; i++) {
            MODAL.chordInterval.forEach(interval => {
                MODAL.modes[mode].modalChord.push(particles[note]);
                note += interval;
            });
        }
        for (let i = 0; i <= 3; i++) {
            MODAL.modes[mode].scale.push(particles[MODAL.modalRoot.root + (OCTAVE * 8)]);
        };
    });
    console.log(MODAL);
    return MODAL;
};

export const stopParticlesInMode = (mode) => {
    MODAL.modes[mode].scale.forEach(particle =>
        particle.stopWhenInScale(width, height)
    );
    MODAL.modes[mode].modalChord.forEach(particle =>
        particle.stopWhenInScale(width, height)
    );
    MODAL.modalRoot.scale.forEach(particle =>
        particle.stopWhenInScale(width, height)
    ); 
}

export const drawParticlesInMode = mode => {
    MODAL.modes[mode].scale.forEach(drawParticle);
    MODAL.modes[mode].modalChord.forEach(drawParticle);
    MODAL.modalRoot.scale.forEach(drawParticle); 
}
    
export const animateScaleParticle = (mode, melodyIndex, frame) =>
    MODAL.modes[mode].scale[getRandomNumber(getModeScaleLength(mode))].myParticleAnimation(frame, SCALE_LENGTH);

export const animateChordParticle = (mode, chordIndex, frame) => {
    MODAL.modes[mode].modalChord[chordIndex].myParticleAnimation(frame, CHORD_LENGTH);
}

export const animateRootParticle = (rootIndex, frame) => {
    MODAL.modalRoot.scale[getRandomNumber(5)].myParticleAnimation(frame, ROOT_LENGTH);
}
    
export const getRandomMode = () => {
    const modesIndex = getRandomNumber(modesLength);
    const mode = Object.keys(MODAL.modes)[modesIndex];
    return MODAL.modes[mode];
};

export const getModeScaleLength = mode => MODAL.modes[mode].scale.length;

export const getModeChordLength = mode => MODAL.modes[mode].modalChord.length;

export const getRootLength = MODAL.modalRoot.scale.length;

