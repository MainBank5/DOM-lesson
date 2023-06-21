//select element by their Id. to manipulate it, store it in a variable 
const title = document.getElementById('mainheading');

title.style.color = 'yellow';
title.style.backgroundColor = 'blue';
title.style.padding = '50px'
console.log(title);

//select element by their class. it returns an iterable HTML collection array of all elements with the given class name 
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

const listItemsArray = Array.from(listItem);
listItemsArray.forEach((item) => {
    console.log(item.innerText)
})
//select element by tag name returns a HTML collection of all elements with the given tag name 
const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

//query selector - selects the first item with the defined selector 
const container = document.querySelector('div');
console.log(container);

console.log(document.querySelector('li:nth-child(3)'))
const thirdItem = document.querySelector('li:nth-child(3)');
thirdItem.innerText = 'John Wick'
const movies = document.querySelector('ul');
console.log(movies);
const firstMovie = movies.querySelector('li');
firstMovie.style.color = 'red'
const secondMovie = movies.querySelector('li:nth-child(2)');
secondMovie.style.color = 'purple'

//query selectorAll - selects all items with the defined selector 
const allContainers = document.querySelectorAll('.container');
console.log(allContainers);
//if its a node list and not HTML collection, you can select a particular item by index
const listedItems = document.querySelectorAll('.list-items');
console.log(listedItems[3]);

//get attribute
console.log(document.getElementById('shopping').getAttribute('class'))
//renaming/set an attribute
console.log(document.getElementById('shopping').id = 'shopping-list');
document.getElementById('shopping-list').setAttribute('class','discount') ;
console.log(document.getElementById('shopping-list'))

//get and changing content
const shoppingList = document.getElementById('shopping-list');
shoppingList.innerText = 'buy the everything'
//console.log(shoppingList)

/*<issue_comment>username_0: ### DOM Manipulation
    //adding item to the list
    const shoppingList = document.getElementById('shopping-list');
    const item = document.createElement('li');
    item.innerText = 'buy the milk';
    shoppingList.appendChild(item);
*/

//queryselctorall - return the defined/selected items as a node list ===array, the node list array is iterable
const groceries = document.querySelectorAll('.items');
groceries[1].style.color = 'red';
console.log(groceries);
//you can also use foreach loop to manipulate all items in a node list instead of using index
groceries.forEach((item, index) => {
    item.style.color = 'red';

    if(index === 1) {
        item.remove();
    }

    //if you want to maintain the style after doing changes with loops, use .InnerHTML to include your style
    if(index === 0) {
        item.innerText = 'Bell Peppers'
    }
})

//for(let item of groceries){
    //item.style.color = 'red';
    //}//

//get/change content 
const heading = document.getElementById('groceries');
console.log(heading);
heading.textContent = 'Family Groceries List';
heading.innerText = 'Monthly Shopping';
heading.innerHTML = '<strong> Spend on these </strong>'

heading.style.color = 'Green';

//a html collection is iterable but you cant use array methods on it.You convert it to array using Array.from