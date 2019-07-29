import { NOTES } from './Constants.js';
import { getRandomNumber } from './Util.js';


var panner=new Tone.Panner(getRandomNumber(1)).toMaster();
var freeverb=new Tone.Freeverb().connect(panner);
var fmsynth= new Tone.FMSynth().connect(freeverb);

export function soParticules() {
    
        var currentNote=getRandomNumber(108);
        fmsynth.triggerAttackRelease(NOTES[currentNote], "0.001");
        /*console.log(NOTES[currentNote]);*/
}


