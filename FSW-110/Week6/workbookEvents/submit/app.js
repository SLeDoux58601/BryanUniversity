// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

document.form.addEventListener("submit", function(e){
    e.preventDefault()
    let userName = document.form.userName.value
    let userAge = document.form.userAge.value
    alert(userName + " " + userAge)
})