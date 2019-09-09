import { EQ_HI, EQ_MID, EQ_LOW } from './Constants';
import Tone from 'tone';

const Eq = new Tone.EQ3( EQ_LOW, EQ_MID, EQ_HI );

export default Eq;
