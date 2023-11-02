### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Any är som att stänga av type-checking för den instansen, medans att använda generics är mer semantiskt korrekt då det blir klart vad som förväntas av funktionen eftersom en generic använder sig av kontext. 

function myFunktion(arg: any): any { ... }

function myFunktion< T >(arg: T): T { ... }