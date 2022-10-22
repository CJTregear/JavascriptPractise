let myShoppingList = ["fruit", "bread", "chicken", "beef", "cakes", "vegetables"]

let items = ''

// function createItemList(arr){
// for(let i=0; i < myShoppingList.length; i++){
//     items +=  `<li>${ arr[i]} </li>`
//  }
//  return items;
// }


let ask = prompt('Which item are you searching for?')
let message;

if(!ask){
    message=`<strong>In Stock:</strong>${myShoppingList.join(', ')}`
} else if(myShoppingList.includes(ask)){
    message = `Yes, we have <strong>${ask}</strong> It's # ${myShoppingList.indexOf(ask)+1} on the list!`;
} else {
    message=`Sorry, we do not have <strong>${ask}</strong>`
}

document.querySelector('main').innerHTML = `
    <p>${message}</p>
`;