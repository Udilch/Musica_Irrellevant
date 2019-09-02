import { EQ_HI, EQ_MID, EQ_LOW } from "./Constants";
import Tone from 'tone';

const Eq = new Tone.EQ3(EQ_HI, EQ_MID, EQ_LOW);

export default Eq;
