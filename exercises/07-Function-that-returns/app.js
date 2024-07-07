//calcula el valor en euros de un monto de dólares dado.
let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}

//calcula el valor en yenes de un monto de euros dado.
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///


console.log("100 dolares son " + dollarToEuro(100) + " euros");

console.log("100 euros son " + euroToYen(100) + " yenes");

//137 dolares a yenes
console.log(euroToYen(dollarToEuro(137)));