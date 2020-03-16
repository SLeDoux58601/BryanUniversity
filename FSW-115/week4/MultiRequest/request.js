const button = document.createElement("button")
document.body.appendChild(button)
button.textContent="StarWars API"
button.addEventListener("click",()=>{
    console.log (button)
    axios.get("https://swapi.co/api/people") .then(response=>{
        console.log (response.data)
        for (i = 0; i < response.data.results.length; i++) {
            const ul = document.createElement('ul')

    document.body.appendChild(ul)
    const li = document.createElement('li')
    li.textContent = response.data.results[i].name
    ul.appendChild(li)
          }
    })
})

//const button = document.createElement("button")
//document.body.appendChild(button)
//button.textContent="meme API"
//button.addEventListener("click",()=>{
  //  console.log (button)
  //  axios.get("https://market.mashape.com/ronreiter/meme-generator") .then(response=>{
     //   console.log (response.data)
      //  for (i = 0; i < response.data.results.length; i++) {
        //    const ul = document.createElement('ul')

  //  document.body.appendChild(ul)
 //   const li = document.createElement('li')
  //  li.textContent = response.data.results[i].name
  //  ul.appendChild(li)
  //        }
 //   })
 // })
