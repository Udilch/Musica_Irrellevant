import { FRAME_RATE, MAXIMUM_RADIUS } from '../Constants';
import { DETUNE_FACTOR } from "./Constants";
import Tone from 'tone';
import Master from "./Master";
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
    constructor(note, noteLength, initialframe) {
        this.note = note;
        this.noteLength = noteLength;
        this.initialFrame = initialframe;
        this.panner = new Tone.Panner();
        this.fmsynth = new Tone.FMSynth().chain(this.panner, Master);
        this.fmsynth.oscillator.type = "sine";
        this.fmsynth.modulation.type = "square";
        this.fmsynth.triggerAttackRelease(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(xPos, yPos, radius, frameCount) {
        this.panner.pan.value = (xPos * 2 / windowWidth) - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationIndex.value = radius;
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
        this.fmsynth.detune.value = yPos / -50;
    }
   
    particleSound(xPos, yPos, radius) {
        this.panner.pan.value = (xPos * 2 / windowWidth) - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
    }
    
    stopSound(xPos, yPos, radius) {
        this.panner.pan.value = (xPos * 2 / windowWidth) - 1;
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
        if (isFinite(radius)){
            polySynthChangeModulationIndex(radius);
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);
        }
    }

    particleSound(xPos, yPos, radius) {
        if (isFinite(radius)){
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);
        }
    }
    
    stopSound(xPos, yPos, radius) {
        if (isFinite(radius)){
            polySynthChangeModulationEnvelope(radius, MAXIMUM_RADIUS);  
        }
    }
}




