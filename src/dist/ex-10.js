"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function myFunction(arg) {
    return arg;
}
myFunction("Hej");
myFunction(42);
// 2. Ge ett exempel på en funktion med två generiska typer.
function mySecondFunction(argA, argB) {
    return [argA, argB];
}
mySecondFunction("Hej", 42);
mySecondFunction(42, "Hej");
