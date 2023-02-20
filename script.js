

const addbtn = document.querySelector(".addbtn")
addbtn.addEventListener('click', ()=>{
    const input = document.querySelector("#input")
    const note = document.querySelector(".list")
    
    //*Creating a list 
    let todo = `<li>${input.value}<button class="remove">X</button</li>`
    note.insertAdjacentHTML("afterbegin", todo)

    let remov = document.querySelector(".remove")

    remov.addEventListener('click', ()=>{
        remov.parentElement.remove()
    })


})


