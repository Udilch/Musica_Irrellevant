import { DAMPENING_VALUE, ROOM_SIZE_VALUE } from "./Constants";
import Tone from 'tone';

const Reverb = new Tone.Freeverb();
Reverb.dampening.value = DAMPENING_VALUE;
Reverb.roomSize.value = ROOM_SIZE_VALUE;

export default Reverb;
