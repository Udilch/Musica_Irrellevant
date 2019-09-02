export const NOTES = [
    "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
    "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
    "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
    "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
    "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
    "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
    "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
    "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
    "C9"
];
export const MODAL = {
    modalRoot: { root: 0, scale: [], },
    chordInterval: [4,2,5,1],
    playScaleSequence: [14,15,16,17,18,19,20,21,20,19,18,17,16,15,14,14],
    modes: {
            ionian: {
                name: "ionian", scale: [], sequence: [2, 2, 1, 2, 2, 2, 1],
                modalChord:[], grade: 5, backgroundColor: 'green',
                color: 'white',
            },
            dorian: {
                name: "dorian", scale: [], sequence: [2, 1, 2, 2, 2, 1, 2],
                modalChord:[], grade: 3, backgroundColor: 'grey',
                color: 'white',
            },
            phrygian: {
                name: "phrygian", scale: [], sequence: [1, 2, 2, 2, 1, 2, 2],
                modalChord:[], grade: 1, backgroundColor: 'yellow',
                color: 'white',
            },
            lydian: {
                name: "lydian", scale: [], sequence: [2, 2, 2, 1, 2, 2, 1],
                modalChord:[], grade: 0, backgroundColor: 'orange',
                color: 'white',
            },
            mixolydian: {
                name: "mixolydian", scale: [], sequence: [2, 2, 1, 2, 2, 1, 2],
                modalChord:[], grade: 10, backgroundColor: 'blue',
                color: 'white',
            },
            aeolyan: {
                name: "aeolyan", scale: [], sequence: [2, 1, 2, 2, 1, 2, 2],
                modalChord:[], grade: 8, backgroundColor: 'pink',
                color: 'white',
            },
            locryan: {
                name: "locryan", scale: [], sequence: [1, 2, 2, 1, 2, 2, 2],
                modalChord:[], grade: 6, backgroundColor: 'black',
                color: 'white',
            },
        },
};
export const OCTAVE = 12;
export const INITIAL_RADIUS = 2;
export const MAXIMUM_RADIUS = 12;
export const FRAME_RATE = 30;
export const PARTICLE_INCREMENT_FACTOR = 20;
export const ACTIVATION_FREQUENCY = 2;
export const NOTE_LENGTH_FACTOR = 2;
export const ROOT_INDEX = 12;
export const ROOT_LENGTH = 20;
export const SCALE_LENGTH = 4;
export const CHORD_LENGTH = 15;
export const ROOT_FREQUENCY = 8;
export const SCALE_FREQUENCY = 7;
export const CHORD_FREQUENCY = 3;
export const DEFAULT_PARTICLE_COLOR = 'red';
export const DEFAULT_BACKGROUND_COLOR = 'lightblue';
