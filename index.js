var doToElementsInArray = (array, callback) => {
  array = ["apple", "banana", "cherry"];
  callback = function(fruit) {
    return `Mmmm, ${fruit}!!!`;
  }
  array.forEach(callback);
}



