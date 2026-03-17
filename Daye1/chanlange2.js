
console.log('chalange2===============');

let notes = [12, 8, 15, 6, 18, 9, 14];
let nbrEleve = 0;
let somme = 0;
let noteHaut =0;
let noteBas= notes[0];
for(i=0; i< notes.length; i++){
    somme += notes[i];
    if(noteHaut < notes[i]){
        noteHaut = notes[i]
    }
    if(noteBas > notes[i]){
        noteBas = notes[i]
    }
    if(notes[i] >= 10){
        nbrEleve ++;
    }
}
let moyenne = somme/notes.length;

console.log('la somme de tous les notes : ', somme);
console.log('la moyenne des notes dans ce classe : ', moyenne);
console.log('la note plus haut dans ce classe : ', noteHaut);
console.log('la note le plus bas dans ce classe : ', noteBas);
console.log('le nombre des eleves ayant le moyenne : ', nbrEleve);