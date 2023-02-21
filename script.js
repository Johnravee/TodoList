
//*
const addbtn = document.querySelector(".addbtn")

//! Adding input value 
addbtn.addEventListener('click', ()=>{
    const input = document.querySelector("#input")
  
    //*If input have value 
    if(input.value.length > 1)
    {
        //*display
        const note = document.querySelector(".list")
    
        //*Creating a list 
        let todo = `<li><b>${input.value}</b><button class="remove">X</button</li>`
        
        //*inserting a value to display
        note.insertAdjacentHTML("afterbegin", todo)

        //*Remove list when click
        let remov = document.querySelector(".remove")
        remov.addEventListener('click', ()=>{
            remov.parentElement.remove()
        })


    }
    //*If input don't have value 
    else
    {
        //*Pop up
       let warning = prompt("No value receive, Please input a value")
       
       //*inserting Pop up value
       if(warning.length > 1 )
       {
         
        const note = document.querySelector(".list")
    
        //*Creating a list 
        let todo = `<li><b>${warning}</b><button class="remove">X</button</li>`
        note.insertAdjacentHTML("afterbegin", todo)
    
        
        let remov = document.querySelector(".remove")
        remov.addEventListener('click', ()=>{
            remov.parentElement.remove()
        })
       }
    }

})

//!remove all list in the container
const removAll = () =>{
    const note = document.querySelector(".list")
      //Remove the element
    note.remove()

    //reload the page to reset
    location.reload()

}



