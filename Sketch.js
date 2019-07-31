import { NOTES, FRAME_RATE, ACTIVATION_FREQUENCY, NOTE_LENGTH_FACTOR} from './Constants.js';
import Particle from './Particle.js';
import { getRandomNumber, mouse } from './Util.js';


var state = 'caos';
var singleCount = 0;
var concreteParticle = getRandomNumber(NOTES.length);
function modify () {
    state='measurement';
    console.log(state);
}

document.addEventListener('click',modify);

export const setup = particles => () => {
    createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
    NOTES.forEach(note => particles.push(new Particle(note)));
    console.log(state);
}

export const draw = particles => () => {
    if(state === 'caos'){
        background('lightblue');
        fill('red');
        stroke('red');
        if (frameCount % getRandomNumber(FRAME_RATE * ACTIVATION_FREQUENCY) === 1) {
            const randomParticle = getRandomNumber(NOTES.length);
            particles[randomParticle].startAnimation(frameCount, getRandomNumber((frameCount % FRAME_RATE) * NOTE_LENGTH_FACTOR));
        }
        particles.forEach(particle => {
            particle.update(frameCount, width, height);
            ellipse(
                particle.xPos, particle.yPos, particle.radius, particle.radius
            );
        });
        text(frameCount, width - 10, 12);   
    }  
    
    else if(state === 'measurement') {
        background('lightblue');
        fill('white');
        stroke('white');
        particles.forEach(particle => {
            particle.stop(width, height);
            ellipse(
                particle.xPos, particle.yPos, particle.radius, particle.radius
            );
        });
        fill('red');
        stroke('red');
        var myParticle = particles[concreteParticle];
        if (frameCount % 30 === 1) {
            myParticle.myParticleAnimation(frameCount,30);
            singleCount++;
        }
        ellipse(myParticle.xPos, myParticle.yPos, myParticle.radius, myParticle.radius);
        text(frameCount, width - 10, 12);
        if (singleCount===7) {
            state = 'caos';
            singleCount = 0;
            concreteParticle = getRandomNumber(NOTES.length);
            
        }
        
    }
}

