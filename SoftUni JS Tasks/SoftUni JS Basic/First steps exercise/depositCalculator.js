function depositCalculator(input)
{
let dsum = Number(input[0]);
let depositPeriod = Number(input[1]);
let Presentige = Number(input[2]);
let PresentigeDec = Presentige / 100;
let sum = dsum + depositPeriod * ((dsum * PresentigeDec)/12);

console.log(sum);
}

depositCalculator(["200", "3", "5.7"])