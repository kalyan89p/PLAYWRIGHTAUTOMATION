let names: string =" allam bellam " 
let strrev : string ="";
let lengt = names.length
let str: string =""
for(let i=lengt-1;i>=0;i--){
strrev+=names[i];
}
console.log(strrev)



let pivot: { letter: string; number: number } = { letter: '', number: 0 };

for (let k = 0; k < lengt; k++) {
    let pivot1 = names[k];
    if (names.includes(pivot1)) {
        pivot.letter = names[k]
        pivot.number++;
    }
}
console.log(pivot)