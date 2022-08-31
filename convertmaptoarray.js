// languages in Map
const language = new Map([
    ["JavaScript", 1500],
    ["ColdFusion", 1200],
    ["Python", 1000]
]);

let myArray = Array.from(language);
console.log(myArray);
// return: [ [ 'JavaScript', 1500], [ 'ColdFusion', 1200], [ 'Python', 1000 ] ]

let myKeyArray = Array.from(language.keys());
console.log(myKeyArray);
// return: [ 'JavaScript', 'ColdFusion' , 'Python' ]

let myValuesArray = Array.from(language.values());
console.log(myValuesArray);
// return: [ 1500, 1200, 1000]