import { FRAME_RATE,MAXIMUM_RADIUS,DAMPENING_VALUE,ROOM_SIZE_VALUE,EQ_HI, EQ_MID, EQ_LOW, DETUNE_FACTOR} from "./Constants.js";
import {getRandomNumber} from "./Util.js";
import Tone from 'tone';

export default class Sound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        this.panner = new Tone.Panner();
        this.eq = new Tone.EQ3(EQ_HI,EQ_MID,EQ_LOW);
        this.reverb = new Tone.Freeverb();
        this.reverb.dampening.value = DAMPENING_VALUE;
        this.reverb.roomSize.value = ROOM_SIZE_VALUE;
        this.fmsynth = new Tone.FMSynth().chain(this.reverb,this.panner,this.eq,Tone.Master);
        this.fmsynth.oscillator.type = "sine";
        this.fmsynth.modulation.type = "square";
        this.fmsynth.triggerAttackRelease(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(frameCount, xPos, yPos, xOff, yOff,radius) {
        this.panner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationIndex.value = radius;
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
        this.fmsynth.detune.value = yPos * DETUNE_FACTOR;
    }
    
    particleSound(frameCount, xPos, yPos, xOff, yOff,radius) {
        this.panner.pan.value = xPos / windowWidth * 2 - 1;
        if (isFinite(radius)){
            this.fmsynth.modulationEnvelope.attack = radius * 10 / MAXIMUM_RADIUS;
        }
        
    }
   
}
