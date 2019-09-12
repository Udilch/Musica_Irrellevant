import Eq from "./Eq";
import Reverb from "./Reverb";
import Tone from 'tone';

const Master = Reverb.chain (Eq, Tone.Master);

export default Master;
