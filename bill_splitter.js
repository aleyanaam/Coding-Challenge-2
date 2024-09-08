//Task 1
var bill = 60;
let tip = bill > 100 ? .25 : .15; // Calculates the tip based on the price of the bill

//Task 2
// Outputs the bill including the cost of the bill, the tip and the overall cost
console.log(`The bill was $${bill} , the tip was $${bill *tip}, and the total value is $${(bill *tip) + bill}`);

//Task 3
function calculateTip(bill,tip){ //Declares the function
    tip = bill >= 150 ? .25 : .15 ;
    return (bill *tip); //Function should return the value obtained from performing the calculation
}
console.log(`The cost of your tip will be $${calculateTip(100,tip)}`); //Outputs the cost of the tip