async function getData(){
    
    try {
        const response = await axios.get("https://api.vschool.io/zachfarmer/todo") 
        const description = await axios.get(response.data.description)
        const price = await axios.get(response.data.price)
        listToDoToDOM(description, response, price)
    }
    catch(error){
        console.log(error)
    }   
}

getData()

function listToDoToDOM(description, response, price){
    const nameh1 = document.createElement('h1')
    nameh1.textContent = response.data.name
    document.body.appendChild(nameh1)

    const h1 = document.createElement('h1')
    h1.textContent = description.data.name
    document.body.appendChild(h1)

    const speciesh1 = document.createElement('h2')
    speciesh1.textContent = price.data.name
    document.body.appendChild(speciesh1)
    
}