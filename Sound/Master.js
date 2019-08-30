import Eq from "./Eq";
import Reverb from "./Reverb";
import Tone from 'tone';

const Master = Eq.chain(Reverb, Tone.Master);

export default Master;
