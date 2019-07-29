import { FRAME_RATE } from "./Constants.js";

export default class Sound {
    constructor(note, noteLength) {
        this.note = note;
        this.noteLength = noteLength;
        this.panner = new Tone.Panner().toMaster();
        this.fmsynth = new Tone.FMSynth().connect(this.panner);
        this.fmsynth.triggerAttackRelease(this.note, this.noteLength / FRAME_RATE);
    }

    updateSound(frameCount, xPos, yPos, xOff, yOff) {
        console.log(xPos / windowWidth * 2 - 1);
        this.panner.pan.value = xPos / windowWidth * 2 - 1;
    }
}
