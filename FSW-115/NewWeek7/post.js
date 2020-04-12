const todoAddition = document.todoAddition

todoAddition.addEventListener("submit", function (event) {
    event.preventDefault()
    const newTodo = {
        title: todoAddition.title.value,
        price: todoAddition.price.value,
        description: todoAddition.description.value
    }
    axios.post("https://api.vschool.", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})