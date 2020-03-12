document.passenger.addEventListener("submit", function(e){
e.preventDefault()

    let firstName = document.passenger.firstName.value
    let lastName = document.passenger.lastName.value
    let age = document.passenger.age.value
    let gender = document.passenger.gender.value
    let city = document.passenger.city.value
    
    const checkedRestrictions = [];
    for(let i = 0; i < passenger.restrictions.length; i++){
        if(passenger.restrictions[i].checked){
            checkedRestrictions.push(passenger.restrictions[i].value)
        }
    }

alert("First Name: " + firstName + "\r\n" + "Last Name: " + lastName + "\r\n" + "Age: " + age + "\r\n" + "Gender: " 
+ gender + "\r\n" + "Location: " + city + "\r\n" + "Dietary Restrictions: " + checkedRestrictions)
})