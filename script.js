const input = document.querySelector('input'); 

const add = document.querySelector('.btn');


add.addEventListener('click',() =>{
 
    let items = JSON.parse(localStorage.getItem('notes'))
   if(items === null){
    //*Create an array
        lst = []
   }
   //*Add value to array
   lst.unshift(input.value)
   localStorage.setItem('notes', JSON.stringify(lst)); 


 //* THE ITEMS
   showItem()
})


//*Show the value inside localstorage
const showItem = () =>{
   let items = JSON.parse(localStorage.getItem('notes'))
   if(items === null){
        lst = []

   }else{
      lst = items;
   }


let displayCon = '';
let itemShow = document.querySelector('.listItems');

//*to show the created 
lst.forEach((data, index )=> {
   

   displayCon += `
   <div class= "todos">
   <p class="h6">${data}</p>
   <button class="btn btn-danger mb-2" onClick="deleteItem(${index})">x</button>
   </div>
   `
})
itemShow.innerHTML = displayCon;
}

//* show the value in window
showItem()

const deleteItem = (item) =>{

   let items = JSON.parse(localStorage.getItem('notes'))

   //*delete value in array 
   items.splice(item, 1)

   //*set the value again to localstorage
   localStorage.setItem('notes', JSON.stringify(items));

   //*show the values inside array
   showItem()
}

const clearTask = () =>{

//*clear all items in localstorage
localStorage.clear()

//*show the values inside array
showItem()
}