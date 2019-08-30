export function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

export function getRandomDecimal(range) {
    return Math.random() * range;
}

export function mouse(what,value,gesture) {
    document.addEventListener(gesture, function modify (){what = value;})
    
}
