//console.log(axios)
function visible () {
    document.getElementById('formPlacement').style.visibility = "visible"
}

/* Initial GET */
axios.get("https://api.vschool.io/GaryJ/todo/")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        /* Title */
        const title = document.createElement('h1')
        title.textContent ="Todo Name: " + response.data[i].title
        document.getElementById('placement').appendChild(title)
        /* Description */
        const description = document.createElement('p')
        description.textContent ="Todo Description: " + response.data[i].description
        document.getElementById('placement').appendChild(description)
        /* Price */
        const price = document.createElement('p')
        price.textContent = "Todo Price: " +  response.data[i].price
        document.getElementById('placement').appendChild(price)
        /* PUT */
        const span1 = document.createElement('span')
        const inputTitleEdit = document.createElement('input')
        const br2 = document.createElement('br')
        const span2 = document.createElement('span')
        const inputDescriptionEdit = document.createElement('input')
        const br3 = document.createElement('br')
        const span3 = document.createElement('span')
        const inputPriceEdit = document.createElement('input')
        const br4 = document.createElement('br')
        const buttonEdit = document.createElement('button')
        buttonEdit.textContent = "Save"
        buttonEdit.className = "editItems"
        /* Title */
        span1.textContent = "Change Title: "
        inputTitleEdit.placeholder = "Change title?"
        inputTitleEdit.name = "title"
        //inputTitleEdit.id = "itemTitleChange"
        inputTitleEdit.className = "editItemTitle"
        inputTitleEdit.value = response.data[i].title
        document.getElementById('formPlacement').appendChild(span1)
        document.getElementById('formPlacement').appendChild(inputTitleEdit)
        document.getElementById('formPlacement').appendChild(br2)
        /* Description */
        span2.textContent = "Change Description: "
        inputDescriptionEdit.placeholder = "Change Description?"
        inputDescriptionEdit.name = "description"
        //inputDescriptionEdit.id = "itemDescriptionChange"
        inputDescriptionEdit.className = "editItemDescription"
        inputDescriptionEdit.value = response.data[i].description
        document.getElementById('formPlacement').appendChild(span2)
        document.getElementById('formPlacement').appendChild(inputDescriptionEdit)
        document.getElementById('formPlacement').appendChild(br3)
        /* Price */
        span3.textContent = "Change Price: "
        inputPriceEdit.placeholder = "Name your Price"
        inputPriceEdit.name = "price"
        inputPriceEdit.className = "editItemsPrice"
        inputPriceEdit.type = "number"
        inputPriceEdit.value = response.data[i].price
        
        document.getElementById('formPlacement').appendChild(span3)
        document.getElementById('formPlacement').appendChild(inputPriceEdit)
        document.getElementById('formPlacement').appendChild(br4)
        /* Edit Button Appends */
        buttonEdit.className = "editItemsAll"
        document.getElementById('formPlacement').appendChild(buttonEdit)
        const todoListEdit = document.formEdit

        todoListEdit.addEventListener("submit", function (event) {
            event.preventDefault()
            id= response.data[i]._id
            const newTodo = {
                title: todoListEdit.title.value,
                description: todoListEdit.description.value,
                price: todoListEdit.price.value
            }
            axios.put("https://api.vschool.io/GaryJ/todo/" + id, newTodo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        })

// let itemEditTitle = document.getElementsByClassName('editItemsAll')
//         for (let i = 0; i < itemEditTitle.length; i++) {
//             itemEditTitle[i].addEventListener('click', function (event){
//                 event.preventDefault()
//                 id = response.data[i]._id
//                 const newItemValue = {
//                     title: event.target.value
//                 }
//                 axios.put("https://api.vschool.io/GaryJ/todo/" + id, newItemValue)
//                 .then(response => console.log(response.data))
//                         .catch(error => console.log(error))
//             })
            
//         }
        


        /* Item edit setup */
        /* const newItemValue = {
            title: event.target.value
        } */
        /* Title Edits */
        // let itemEditTitle = document.getElementsByClassName('editItemTitle')
        // for (let i = 0; i < itemEditTitle.length; i++) {
        //     itemEditTitle[i].addEventListener('dblclick', function (event){
        //         event.preventDefault()
        //         id = response.data[i]._id
        //         const newItemValue = {
        //             title: event.target.value
        //         }
        //         axios.put("https://api.vschool.io/GaryJ/todo/" + id, newItemValue)
        //     })
            
        // }
        /* Description Edits */
        // let itemEditDescription = document.getElementsByClassName('editItemDescription')
        // for (let i = 0; i < itemEditDescription.length; i++) {
        //     itemEditDescription[i].addEventListener('dblclick', function (event){
        //         event.preventDefault()
        //         id = response.data[i]._id
        //         const newItemValue = {
        //             description: event.target.value
        //         }
        //         axios.put("https://api.vschool.io/GaryJ/todo/" + id, newItemValue)
        //     })
        // }
        /* Price Edits */
    //     let itemEditPrice = document.getElementsByClassName('editItemPrice')
    //     for (let i = 0; i < itemEditPrice.length; i++) {
    //         itemEditPrice[i].addEventListener('dblclick', function (event){
    //             event.preventDefault()
    //             id = response.data[i]._id
    //             const newItemValue = {
    //                 price: event.target.value
    //             }
    //             axios.put("https://api.vschool.io/GaryJ/todo/" + id, newItemValue)
    //         })
        
    // }
        /* Delete*/
        const br = document.createElement('br')
        const deleteItem = document.createElement('button')
        deleteItem.textContent = "Delete Item"
        deleteItem.className = "deleteItem"
        document.getElementById('placement').appendChild(br)
        document.getElementById('placement').appendChild(deleteItem)
        let itemToRemove = document.getElementsByClassName('deleteItem')
        for(let i = 0; i < itemToRemove.length; i++) {
            itemToRemove[i].addEventListener('click', function (event) {
                event.preventDefault()
                id = response.data[i]._id
                console.log(id)
                axios.delete("https://api.vschool.io/GaryJ/todo/" + id) 
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                
          })
        }
    }  
    }
)
.catch(error => console.log(error))