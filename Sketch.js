import { NOTES, FRAME_RATE, ACTIVATION_FREQUENCY, NOTE_LENGTH_FACTOR, ROOT_LENGTH, SCALE_LENGTH, ROOT_FREQUENCY, SCALE_FREQUENCY } from './Constants.js';
import Particle from './Particle.js';
import { getRandomNumber, mouse, randomMode } from './Util.js';


var state = 'caos';
var singleCount = 0;
var currentMode;
var concreteParticle = getRandomNumber(NOTES.length);
var root = 12;

export const setup = particles => () => {
    createCanvas(windowWidth, windowHeight);
    fill(240, 255, 180);
    frameRate(FRAME_RATE);
    strokeWeight(1);
    rectMode(CENTER);
    textSize(10);
    textAlign(RIGHT);
    NOTES.forEach(note => particles.push(new Particle(note)));
    console.log(particles);
    currentMode = randomMode(particles);
    console.log(currentMode);
}

function modifyVar(){
    state = currentMode.name;
    console.log(currentMode.name);
}

document.addEventListener('click',modifyVar);

export const draw = particles => () => {
    
    if(state === 'caos'){
        background('#FEFBF0');
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
    
    else if(state === 'ionian') {
        document.removeEventListener('click',modifyVar);
        background('pink');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
            
        }  
    } 
    
    else if(state === 'dorian') {
        document.removeEventListener('click',modifyVar);
        background('grey');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount === currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
        
    }
    
    else if(state === 'phrygian') {
        document.removeEventListener('click',modifyVar);
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
    }
    
    else if(state === 'lydian') {
        document.removeEventListener('click',modifyVar);
        background('orange');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
    }
    
    else if(state === 'mixolydian') {
        document.removeEventListener('click',modifyVar);
        background('#F6DD5F');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
    }
    
    else if(state === 'aeolyan') {
        document.removeEventListener('click',modifyVar);
        background('lightgreen');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
    }
    
    else if(state === 'locryan') {
        document.removeEventListener('click',modifyVar);
        background('black');
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
        currentMode.sequence.forEach(particle => {
            particle.myParticleStop(width, height);  
            ellipse(particle.xPos, particle.yPos, particle.radius, particle.radius);
            
        })
        if (frameCount % ROOT_FREQUENCY === 1) {
            particles[root].myParticleAnimation(frameCount,ROOT_LENGTH);
        }
        if (frameCount % SCALE_FREQUENCY === 1) {
            currentMode.sequence[singleCount].myParticleAnimation(frameCount,SCALE_LENGTH);
            singleCount++;
        }
        text(frameCount, width - 10, 12);
        if (singleCount===currentMode.sequence.length) {
            state = 'caos';
            singleCount = 0;
            currentMode = randomMode(particles);
            document.addEventListener('click',modifyVar);
        }
    }
}


