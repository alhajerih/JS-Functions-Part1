/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(){
    console.log("Hamad Faleh Alhajeri");
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

const Birth = 1993;
function printAge(Birth){
    
    const Age = 2024 - Birth;
    console.log(`the age ${Age}`);
}
printAge(Birth);


/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
let Name = "Hamad";

function printAgeAndName(Birth,Name){
    console.log(`Hello ${Name}, you are ${2024-Birth} years old.`)

}
printAgeAndName(Birth,Name);

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(Name , language){
    if(language === `en`){console.log(`Hello ${Name}`);}
        else if (language ===`es`){console.log(`Hola ${Name}`);}
            else if (language === `fr`){console.log(`Bonjour ${Name}`);}
                else if (language === `tr`){console.log(`Merhaba ${Name}`);}

}

printHello(Name ,`fr` );


/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(firstNumber,secondNumber){

    if(firstNumber>secondNumber)console.log(firstNumber);
        else console.log(secondNumber);

}
printMax(50,100);