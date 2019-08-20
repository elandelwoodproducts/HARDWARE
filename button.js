button.addEventListener(
  "click",
  (function() {
    const button = document.getElementById("button");
    let count = 0;
    return function() {
      count++;
      if (count === 2) {
        alert("This apears to every press!");
        count = 0;
      }
    };
  })()
);
const water = {
  state:"liquid",
  color:"transparent",
  adj:"wet",
  getWet: function (obj) {
  console.log(`${obj} is now ${this.adj} 
  `)},
};
