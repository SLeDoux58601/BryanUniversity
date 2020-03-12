console.log('Hello World')

const start = document.baddieCalc;

// baddieGoomba()
start.addEventListener("submit", (event) => {
    event.preventDefault();
    //total goombas captured
    let baddieGoomba = (start["goombas"].value);
    let baddieGoombaTotal = document.getElementById("goombaTotal");
    baddieGoombaTotal.textContent = `${baddieGoomba}`
    //total bobombs captured
    let baddieBobomb = (start["bobombs"].value)
    let baddieBobombTotal = document.getElementById("bobombTotal");
    baddieBobombTotal.textContent = `${baddieBobomb}`
    //total cheepcheeps captured
    let baddieCheepCheep = (start["cheepCheeps"].value);
    let baddieCheepCheepTotal = document.getElementById("cheepCheepTotal");
    baddieCheepCheepTotal.textContent = `${baddieCheepCheep}`
    //total calculator
    let goomba = (start["goombas"].value * 5);
    let bobomb = (start["bobombs"].value * 7);
    let cheepCheep = (start["cheepCheeps"].value * 11);
    let totalAmount = goomba + bobomb + cheepCheep
    let end = document.getElementById("total");
    end.textContent = `$${totalAmount}`
    document.querySelector("form").reset();
})