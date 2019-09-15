var info; 
var button;

export const createInfo = () => {
    button = createElement('div', '?');
    button.mouseClicked(infoExpand);
    button.style('text-align','right');
}

export const infoExpand = () => {
    button.html('');
    info = createElement('div', '');
    info.parent(button);
    info.style('text-align','left');
    info.style('clear', 'both');
    info.html('<p>&#34;<a href="https://github.com/Udilch/QuantumParticles" target="_blank">Música Irrellevant</a>&#34; is an interactive application by <a href="https://odilbright.com/" target="_blank">Odil Bright</a>, developed using <a href="https://tonejs.github.io" target="_blank">Tone.js</a> and <a href="https://p5js.org" target="_blank">p5.js</a>.</p><p>Special thanks to <a href="http://andypoole.info/" target="_blank">Andy Poole</a> for his technical assistance with the software architecture and design.</p>');
    button.mouseClicked(infoCollapse);
}

export const infoCollapse = () => {
   /* info.html('');*/
    button.html('?');
    button.mouseClicked(infoExpand);
}