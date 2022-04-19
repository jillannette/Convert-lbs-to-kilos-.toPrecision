const convertWeight = function (weight, unit) {
    if (weight > 0 && unit === "kilos") {
    return (weight * 2.20462);
  } else if (weight > 0 && unit === "pounds") {
    return (weight / 2.20462);
}
};
console.log(convertWeight(100, "pounds"));


Math.roundTo = function (number, positions) {
  let result = number.toPrecision(5);
  return result;
  
};
console.log(Math.roundTo(45.35929094356398, 4));
