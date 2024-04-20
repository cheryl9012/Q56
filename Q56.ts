// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let listItems = [1 , "Pineapple" , 2 , "Mango" , true, "Beans"];

let stringArray = listItems.filter(item => typeof item === "string");

console.log(stringArray);