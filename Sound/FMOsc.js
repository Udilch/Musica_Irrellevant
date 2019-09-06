import Tone from 'tone';
import scalePanner from "./Panner";
import Master from "./Master";

export const envelope = new Tone.AmplitudeEnvelope().chain(scalePanner, Master);
export const envelopeTrigger = (note_length) => envelope.triggerAttackRelease(note_length);

export const fmOSC = new Tone.FMOscillator().connect(envelope).start();


