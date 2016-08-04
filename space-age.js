function SpaceAge(age) {
  this.seconds = age;

}

SpaceAge.prototype.onEarth = function (age) {
  earthYr = (this.seconds / 31555695.8);
  return parseFloat((earthYr).toFixed(2));
};

SpaceAge.prototype.onMercury = function (age) {
  mercuryYr = (this.seconds / 7600525.8);
  return parseFloat((mercuryYr).toFixed(2));
};

SpaceAge.prototype.onVenus = function (age) {
  venusYr = (this.seconds / 19411026.2);
  return parseFloat((venusYr).toFixed(2));
};



var age1 = new SpaceAge(1000000);
var age2 = new SpaceAge(1000000000);

console.log('space check');

console.log(age2.onEarth());
module.exports = SpaceAge;
