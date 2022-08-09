let array = [1, 2, 3, 4, 5, 6];
let anotherArray = ["a", "b", "c", "d", "f", "g", "h"];

//split
let sp = array.splice(2, 5);
console.log(sp); //==> [3,4,5]

console.log(array.indexOf(4)); //=>3
console.log(array.lastIndexOf(3)); //=>2

//slide and concat
//takes the array from starting index, to the
//second argument which is the end
//the concat to glue the remaining elemen
// by skipping the or adding 1 to the second
//argument
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(array, 3));
console.log(remove(anotherArray, 4));
