import { setup, draw } from './Sketch.js';
import p5 from 'p5/lib/p5.min.js';
import style from './style.css';

const particles = [];

window.setup = setup(particles);
window.draw = draw(particles);
