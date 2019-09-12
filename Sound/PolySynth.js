import Tone from 'tone';
import Master from "./Master";

export const polySynth = new Tone.PolySynth(10, Tone.Synth).chain(Master);

polySynth.set({
	"oscillator" : {
		"type" : "triangle"
	},
    "volume" : 0
});

export const polySynthTrigger = (note, length) => {
    polySynth.triggerAttackRelease(note, length);
}

export const polySynthChangeModulationIndex = (radius) => polySynth.set({
    "modulation" : {
		"index" : radius/10
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

export const polySynthChangePitch = (yPos) => {
    let value = yPos;
    polySynth.set({
        "detune" : value * 2
    });
}

