// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.
function myFunction< T >(arg: T): T {
    return arg
}
myFunction("Hej")
myFunction(42)

// 2. Ge ett exempel på en funktion med två generiska typer.
function mySecondFunction<A, B>(argA: A, argB: B ): [A, B] {
    return [argA, argB]
}
mySecondFunction("Hej", 42)
mySecondFunction(42, "Hej")



// 3. Ge ett exempel på ett interface med en generisk typ.
interface GenericName<Generic> {
    name: Generic
}