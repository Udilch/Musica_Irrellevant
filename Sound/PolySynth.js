import Tone from 'tone';
import fmSynth from "./FMSynth";
import Master from "./Master";
import scalePanner from "./Panner";

export const polySynth = new Tone.PolySynth(6,fmSynth).chain(scalePanner, Master);

export const polySynthTrigger = (note, length) => polySynth.triggerAttackRelease(note, length);

export const fmSynthChangeModulationIndex = (radius) => fmSynth.modulationIndex.value = radius;

export const fmSynthChangeModulationEnvelope = (radius, max_radius) => fmSynth.modulationEnvelope.attack = radius * 10 / max_radius;

export const fmSynthChangePitch = (yPos, DETUNE_FACTOR) => fmSynth.detune.value = yPos * DETUNE_FACTOR;

export const fmSynthChain = () => fmSynth.chain();
