const collection = ["bob", 1, false, "smith", "johne"];
console.log(collection);
console.log(collection.length);

//we can also use (index of last item +1) to add an item to the array
collection[5] = "indexadded";
console.log(collection);

//add using push
//Commonly used
collection.push("added");
console.log("added in back", collection);

//can also add at the end of array using name.length = 'new item to add'
collection[collection.length] = "added using length";

//remove in front
collection.unshift();
console.log("remove from front", collection);
console.log(collection.length);

//remove from back
collection.pop();
console.log("removed from back", collection);
console.log(collection.length);

//add from front
collection.shift("frontadded");
console.log("added in front", collection);
console.log(collection.length);

//remove last item and place it in front
//using nested mthd nam.unshift(nam.pop())
collection.unshift(collection.pop());
console.log(collection);

//remove first elt and put in at end
collection.push(collection.shift());

//delete
collection.splice(2, 1); //1st arg is elt to delete, 2nd arg is nb of elt to delete

// change specific smith to 10
collection[3] = 10;
console.log("changed smith to 10", collection);
console.log(collection.length);

// output the array as a string separated by pipe
collection.join(" | ");

//loop thru array and surround each item with <li>
let surround;
collection.forEach(function (item) {
  surround = `<li>${item}</li>`;
  console.log(surround);
});

//find each item in array  and check if its char >= 5
let itemCharLength = collection.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});

console.log(itemCharLength); //smith its length = 5

var response = { data: [{ users: [1, 2, 3] }, { users: [4, 5, 6] }] };

var user = response.data.map((o) => o.users);
for (let u of users) {
  console.log(u)
}

//connect both arrays into a single array
const usersCollection = [].concat(...users);
console.log(usersCollection);
