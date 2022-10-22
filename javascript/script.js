let myShoppingList = ["fruit", "bread", "chicken", "beef", "cakes", "vegetables"]

let items = ''

function createItemList(arr){
for(let i=0; i < myShoppingList.length; i++){
    items +=  `<li>${ arr[i]} </li>`
 }
 return items;
}

document.querySelector('main').innerHTML = `
    <ol>
        ${createItemList(myShoppingList)}
    </ol>
`;