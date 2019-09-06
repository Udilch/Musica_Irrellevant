import { FRAME_RATE, MAXIMUM_RADIUS } from '../Constants';
import { DETUNE_FACTOR } from "./Constants";
import Tone from 'tone';
import Master from "./Master";
import scalePanner from "./Panner";
import {
    envelopeTrigger,
    fmOSC  
} from "./FMOsc";
import { 
    fmSynth,
    fmSynthTrigger, 
    fmSynthChangeModulationEnvelope, 
    fmSynthChangeModulationIndex,
    fmSynthChangePitch,
    fmSynthChain,
} from "./FMSynth";
import {
    polySynthTrigger,
    polySynthChangeModulationIndex,
    polySynthChangeModulationEnvelope,
    polySynthChangePitch,
} from "./PolySynth";

export class Sound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        this.fmsynth = new Tone.FMSynth().chain(scalePanner, Master);
        this.fmsynth.oscillator.type = "sine";
        this.fmsynth.modulation.type = "square";
        this.fmsynth.triggerAttackRelease(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationIndex.value = radius;
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
        this.fmsynth.detune.value = yPos * DETUNE_FACTOR;
    }

    particleSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }

    }
    
    stopSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
            
        }
    }
}

export class PolySound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        polySynthTrigger(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            polySynthChangeModulationIndex(radius);
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);
        }
        polySynthChangePitch(yPos, DETUNE_FACTOR);
    }

    particleSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);
        }
    }
    
    stopSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);  
        }
    }
}

export class FMSound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        fmOSC.frequency.value = (this.note);
        envelopeTrigger(this.noteLength / FRAME_RATE);
    }

    updateSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            fmOSC.modulationIndex.value = radius;
        }
        fmOSC.detune.value = yPos * DETUNE_FACTOR;
    }

    particleSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        /*if (isFinite(radius)){
            fmOSC.phase.value = radius * 10 / MAXIMUM_RADIUS;
        }*/
    }
    
    stopSound(xPos, yPos, radius) {
        scalePanner.pan.value = xPos / windowWidth * 2 - 1;
        /*if (isFinite(radius)){
            fmOSC.phase.value = radius * 10 / MAXIMUM_RADIUS;
            
        }*/
    }
}



