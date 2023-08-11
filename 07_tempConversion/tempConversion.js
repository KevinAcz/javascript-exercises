const roundNumber = (number) => {
  return Math.round(number * 10) / 10;
};

const convertToCelsius = function(number) {
  number = (number - 32) * (5/9);
  return (roundNumber(number));
};

const convertToFahrenheit = function(number) {
  number = (number * 9/5 + 32);
  return (roundNumber(number));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
