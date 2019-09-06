import Tone from 'tone';
import fmSynth from "./FMSynth";
import Master from "./Master";
import scalePanner from "./Panner";

export const polySynth = new Tone.PolySynth(7,Tone.FMSynth).chain(scalePanner,Master);

polySynth.set({
	"oscillator" : {
		"type" : "sine"
	},
    "modulation" : {
		"type" : "square"
	}
});

console.log(polySynth.get());

export const polySynthTrigger = (note, length) => {
    polySynth.triggerAttackRelease(note, length);
}

export const polySynthChangeModulationIndex = (radius) => polySynth.set({
    "modulation" : {
		"index" : radius
	}
});

export const polySynthChangeModulationEnvelope = (radius, max_radius) => {
    let value = radius * 10 / max_radius;
    polySynth.set({
        "modulationEnvelope" : {
		  "attack" : value
        }
    });
    
}

export const polySynthChangePitch = (yPos, DETUNE_FACTOR) => {
    let value = yPos * DETUNE_FACTOR;
    polySynth.set({
        "detune" : value
    });
}

