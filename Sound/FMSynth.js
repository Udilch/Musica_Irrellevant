import Tone from 'tone';
import Master from "./Master";
import scalePanner from "./Panner";

export const fmSynth = new Tone.FMSynth();

fmSynth.oscillator.type = "sine";
fmSynth.modulation.type = "square";

export const fmSynthChangeModulationIndex = (radius) => fmSynth.modulationIndex.value = radius;

export const fmSynthChangeModulationEnvelope = (radius, max_radius) => fmSynth.modulationEnvelope.attack = radius * 10 / max_radius;

export const fmSynthChangePitch = (yPos, DETUNE_FACTOR) => fmSynth.detune.value = yPos * DETUNE_FACTOR;


