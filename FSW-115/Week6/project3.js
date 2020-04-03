

    axios.get("https://swapi.co/api/people") .then(response=>{
        console.log (response.data)
        const div = document.createElement('div')
        div.className="StarWarsPeople"
    document.body.appendChild(div)
    //     const h1=document.createElement("h1")
    //    div.append(h1)
        const h2=document.createElement("h2")
     div.append(h2)
     h2.textContent="StarWars People"
     h2.style.fontSize="30px"
     
    //  const div = document.createElement('div')
    // document.body.appendChild(div)
        for (i = 0; i < response.data.results.length; i++) {
            const ul = document.createElement('ul')

    div.appendChild(ul)
    const li = document.createElement('li')
    li.textContent = response.data.results[i].name
    ul.appendChild(li)
          }
    }).then(response=>{axios.get("https://swapi.co/api/planets") .then(response=>{
        console.log (response.data)
    //     const div = document.createElement('div')
    // document.body.appendChild(div)
        for (i = 0; i < response.data.results.length; i++) {
            const ul = document.createElement('ul')

    div.appendChild(ul)
    const li = document.createElement('li')
    li.textContent = response.data.results[i].name
    ul.appendChild(li)
          }
    }) .then(response=>{axios.get("https://rickandmortyapi.com/api/character") .then(response=>{
        console.log (response.data)
        console.log(document.getElementsByClassName("RickandMorty")[0])
        for (i = 0; i < response.data.results.length; i++) {
            const ul = document.createElement('ul')
   div.appendChild(ul)
    const li = document.createElement('li')
    li.textContent = response.data.results[i].name
    ul.appendChild(li)
          }
    })
    const div = document.createElement('div')
    div.className="RickandMorty"
document.body.appendChild(div)
    const h1=document.createElement("h1")
   div.append(h1)
   
    h1.textContent="Rick & Morty Api"
    h1.style.fontSize="30px"
    })
    const div = document.createElement('div')
    div.className="Planets"
document.body.appendChild(div)
    const h2=document.createElement("h2")
   div.append(h2)
    h2.textContent="StarWars Planets"
    h2.style.fontSize="30px"
    })