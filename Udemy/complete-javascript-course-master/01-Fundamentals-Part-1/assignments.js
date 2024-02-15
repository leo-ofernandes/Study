// Start Values and Variables
const country = 'Brazil';
const continent = 'South America';
let population = 214.3;

console.log(country);
console.log(continent);
console.log(population);
// End Values and Variables

// Start Data Types
const isIsland = false; 
let language;
/*console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
 console.log(population, isIsland, country, language); */
// End Data Types

// Start let, const and var
language = "portuguese";
console.log(population, isIsland, country, language);
//End let, cont and var

// Start Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description)
// End Basic Operators

// Start Strings and Template Literals
/* const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`; */
// End Strings and Template Literals

// Start Taking Decisions: if / else Statements
if(population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}
// End Taking Decisions: if / else Statements

// Start Type Conversion and Coercion
/* 
4
617
23
false
1143 
console.log('9' - '5');
 console.log('19' - '13' + '17'); 
 console.log('19' - '13' + 17); 
 console.log('123' < 57);
 console.log(5 + 6 + '4' + 9 - 4 - 2);*/
// End Type Conversion and Coercion

// Start Equality Operators: == vs. ===
/* let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) {
    console.log('Only 1 border!');
} else if(numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */
// End Equality Operators: == vs. ===

// Start Logical Operators
if (language === 'english' && population < 50 && !isIsland) {
 console.log(`You should live in ${country} :)`);
 } else {
 console.log(`${country} does not meet your criteria :(`);
 }
// End Logical Operators

// Start The Switch Statement
switch(language) {
    case 'chinese' :
    case 'mandarin' :
        console.log('MOST number of native speakers!');
        break;
    case 'spanish' :
        console.log('2nd place in number of native speakers');
        break;
    case 'english' :
        console.log('3rd place');
        break;
    case 'hindi' :
        console.log('Number 4');
        break;
    case 'arabic' :
        console.log('5th most spoken language');
        break;
    default :
        console.log('Great language too :D');
}
// End The Switch Statement

// Start The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
// End The Conditional (Ternary) Operator