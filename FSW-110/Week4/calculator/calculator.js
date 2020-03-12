function add ()
{
const value1 =document.getElementById("value1").value
const value2 =document.getElementById("value2").value

const span= document.createElement("span");
span.innerText=Number(value1)+Number(value2)

const valuediv= document.getElementById("result");

valuediv.appendChild(span)
}

function subtract()
{
    const value1 =document.getElementById("value1").value
    const value2 =document.getElementById("value2").value

    const span= document.createElement("span")
    span.innerText=Number(value1)-Number(value2)

    const valuediv= document.getElementById("result")

    valuediv.appendChild(span)

}

function multiply()
{
    const value1 =document.getElementById("value1").value
    const value2 =document.getElementById("value2").value

    const span= document.createElement("span")
    span.innerText=Number(value1)*Number(value2)

    const valuediv= document.getElementById("result")

    valuediv.appendChild(span)

}
function divide()
{
    const value1 =document.getElementById("value1").value
    const value2 =document.getElementById("value2").value

    const span= document.createElement("span")
    span.innerText=Number(value1)/Number(value2)

    const valuediv= document.getElementById("result")

    valuediv.appendChild(span)

}