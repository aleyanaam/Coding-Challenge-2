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


//Task 4
let bills = [275,40,430,125,555,44]; // an array is created with the dataset for the bills

const tips = bills.map(bill => calculateTip(bill)); //applies the previous function to all bills in the dataset

let total = bills.map((bill,index) => bill + tips[index]); //calulates the total including the bills and the tips

// Outputs the values in the respective arrays
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", total);
