import { setup, draw } from './Sketch.js';
import p5 from 'p5/lib/p5.min.js';
import style from './style.css';
import StartAudioContext from 'startaudiocontext/StartAudioContext.js';
import Tone from 'tone';

StartAudioContext(Tone.context).then(function(){
	//started
})
window.setup = setup;
window.draw = draw;
