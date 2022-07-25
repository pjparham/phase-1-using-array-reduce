const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//  let totalBatteries = batteryBatches.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
//  }, 0);

//  let totalBatteries = batteryBatches.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//  , 0);

 const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue, 0);