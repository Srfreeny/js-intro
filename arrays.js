// console.log("arrays!")

// const bestFriend = "Bert"
// const bestFriendArray = bestFriend.split("");

// console.log("My best friend in array format", bestFriendArray)


// const array2 = ["cow", "dog", "cat"];

// const string = array2.join(', ')

// console.log(string)

 const animals = ["cow", "dog", "cat"];

// const lastAnimal = animals.pop();

// console.log ("animals", animals);
// console.log("last animal", lastAnimal);


// const first = animals.shift();
// console.log(first)
// console.log("animals", animals)

// animals.unshift("bear");
// console.log(animals)

// animals.push("cow")
// console.log(animals);


const arrayAndIndex = (array, index) => {
    return array[index];
}

console.log(arrayAndIndex(animals, 1));


const findGreg = (array) => {
 return array.includes("Greg")

}

console.log(findGreg(["Greg", "Jim"]));            