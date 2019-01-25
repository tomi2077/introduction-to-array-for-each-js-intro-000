var doToElementsInArray = () => {
  
}

const array = ["apple", "banana", "cherry"];

const callback = 
array.forEach(doToElementsInArray())
  

 it('invokes the passed-in callback function on every element of the passed-in array using Array.prototype.forEach()', () => {
      const callback = function(fruit) {
        return `Mmmm, ${fruit}!!!`;
      };


