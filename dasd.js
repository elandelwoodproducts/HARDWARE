// const contenderData = [
//   { city: "riverside", name: "tony", tacos: 32 },
//   { city: "riverside", name: "lee", tacos: 20 },
//   { city: "redlands", name: "kim", tacos: 6 },
//   { city: "corona", name: "christopher", tacos: 17 },
//   { city: "riverside", name: "amanda", tacos: 14 },
//   { city: "moreno valley", name: "justin", tacos: 25 },
//   { city: "moreno valley", name: "mary", tacos: 16 },
//   { city: "corona", name: "ashley", tacos: 15 },
//   { city: "moreno valley", name: "joe", tacos: 7 },
//   { city: "redlands", name: "Purpose", tacos: 21 }
// ];

// <name> from <city> finished <tacos> in one hour!
// ```Using the contenderData array and map():
//       - Return a string for each item in the array in the following format:
//           <name> from <city> finished <tacos> in one hour!
//       - Store the returned data in a new tacosFinished variable, and console log it.```

// ```const contenderData = [
//   { city: "riverside", name: "tony", tacos: 32 },
//   { city: "riverside", name: "lee", tacos: 20 },
//   { city: "redlands", name: "kim", tacos: 6 },
//   { city: "corona", name: "christopher", tacos: 17 },
//   { city: "riverside", name: "amanda", tacos: 14 },
//   { city: "moreno valley", name: "justin", tacos: 25 },
//   { city: "moreno valley", name: "mary", tacos: 16 },
//   { city: "corona", name: "ashley", tacos: 15 },
//   { city: "moreno valley", name: "joe", tacos: 7 },
//   { city: "redlands", name: "batman", tacos: 21 }
// ];```

const tacosFinished = contenderData.map(function(contender) {
  return `${
    contender.name
  } from ${contender.city} finished ${contender.tacos} in one hour!`;
});

console.log(tacosFinished);
const results =  contenderData.filter(function(contender) {
    if ((contender.tacos >= 14 && contender.tacos <=24) || contender.name === "tony") {
        return contender;
    }
});


 Using the contenderData array and filter():
   - Return only contenders who ate between 15 tacos and 25 tacos, or named tony.
   - Store the returned data in a new `results` variable.





   /*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/

function expandArray() {
  let myArray = [ 1, 1, 1 ] ;
  return function () {
    myArray.push(1);  
  return myArray;
  }
  console.log(myArray);
}
expandArray()();


const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();

const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();



create a tv object using a constructor function with the following properties:
turnOn: false; size:32; screen:led, and a method that turns the tv on and off.
console.log the object and turn on and off the tv twice.  



  function tv() {
    this.turnOn= false;
      this.size=32;
      this.power= function() {
    if(!this.turnOn){
      this.turnOn= true;
    } else {
      this.turnOn=false;
    }};
  
  }