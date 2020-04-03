 function getData(){
    
   axios.get("https://api.vschool.io/zachfarmer/todo") .then(response=>{
       // const description = (response.data.description)
       // const price = (response.data.price)
        listToDoToDOM( response)
    })
    .catch(error=>{
        console.log(error)
    })
}

getData()

function listToDoToDOM( response){
    console.log (response.data)
    const nameh1 = document.createElement('h1')
    nameh1.textContent = response.data.name
    document.body.appendChild(nameh1)

    const h1 = document.createElement('h1')
    h1.textContent = response.data.name
    document.body.appendChild(h1)

    const speciesh1 = document.createElement('h2')
    speciesh1.textContent = response.data.name
    document.body.appendChild(speciesh1)
    
}