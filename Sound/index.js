import { FRAME_RATE, MAXIMUM_RADIUS } from '../Constants';
import { DETUNE_FACTOR } from "./Constants";
import Tone from 'tone';
import Master from "./Master";

export default class Sound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        this.panner = new Tone.Panner();
        this.fmsynth = new Tone.FMSynth().chain(this.panner, Master);
        this.fmsynth.oscillator.type = "sine";
        this.fmsynth.modulation.type = "square";
        this.fmsynth.triggerAttackRelease(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(xPos, yPos, radius) {
        this.panner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationIndex.value = radius;
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
        this.fmsynth.detune.value = yPos * DETUNE_FACTOR;
    }

    particleSound(xPos, yPos, radius) {
        this.panner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }

    }

}
