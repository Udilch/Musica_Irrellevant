export function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

export function getRandomDecimal(range) {
    return Math.random() * range;
}

export function mouse(what,value,gesture) {
    var gesture = gesture; 
    var value = value;
    var what = what;
    document.addEventListener(gesture, function modify (){what = value;})   
}

export function randomMode(elements){
    /*var particleModes=[{name: "ionian", sequence:[0,2,4,5,7,9,11,12]},{name: "dorian", sequence:[0,2,3,5,7,9,10,12]},{name: "phrygian", sequence:[0,1,3,5,7,8,10,12]},{name: "lydian", sequence:[0,2,4,6,7,9,11,12]},{name: "mixolydian", sequence:[0,2,4,5,7,9,10,12]},{name: "aeolyan", sequence:[0,2,3,5,7,8,10,12]},{name: "locryan", sequence:[0,1,3,5,6,8,10,12]}];*/
    var elements = elements; 
    var modes = [{name: "ionian", sequence:[2,2,1,2,2,2,1]},{name: "dorian", sequence:[2,1,2,2,2,1,2]},{name: "phrygian", sequence:[1,2,2,2,1,2,2]},{name: "lydian", sequence:[2,2,2,1,2,2,1]},{name: "mixolydian", sequence:[2,2,1,2,2,1,2]},{name: "aeolyan", sequence:[2,1,2,2,1,2,2]},{name: "locryan", sequence:[1,2,2,1,2,2,2]}]; 
    
    var currentMode = modes[Math.floor(Math.random()*7)];
    var genScale = {name: currentMode.name, sequence:[]};
    var x = 48;
    for (var i = 0; i <= 4; i++){
        for(var j = 0; j < currentMode.sequence.length; j++){
            genScale.sequence.push(elements[x]); 
            x += currentMode.sequence[j];
        }
    }
    return genScale; 
}
          
