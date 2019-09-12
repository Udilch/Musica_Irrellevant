import { setup, draw } from './Sketch.js';
import { windowResized } from './Canvas.js';
import img from './Images/ActivarSo.svg';
import p5 from 'p5/lib/p5.min.js';
import p5dom from 'p5/lib/Addons/p5.dom.js';
import style from './style.css';
import Tone from 'tone';

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;

