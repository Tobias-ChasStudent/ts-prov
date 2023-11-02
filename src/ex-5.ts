// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.
type StockData = {
  day: string,
  price: number
}


const getRisingStockDays = (stockMeasurements: Array<StockData>): Array<StockData> =>
  stockMeasurements.filter((data: StockData) => data.price > 100);

const stockMeasurements: Array<StockData> = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: Array<StockData> = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
