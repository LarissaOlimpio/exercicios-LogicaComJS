const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");
const item = [];

button.addEventListener("click",()=>{

    createElement(calcDouble(input.value))
    createElement(calcTriple(input.value))
    createElement(squareRoot(input.value))

})

function calcDouble(number){
    return `O dobro de ${number} é ${number*2}`
}
function calcTriple(number){
    return `O triplo de ${number} é ${number*3}`
}
function squareRoot(number){
    return `A raíz quadrada de ${number} é ${Math.sqrt(number).toFixed(2)} `
    //ou = (number**(1/2)).toFixed(2)
}
function createElement(element){
    const li = document.createElement('li')
    li.innerHTML = element
    result.appendChild(li)

    const currentResult ={
        "result" : element
    }
    item.push(currentResult)
    localStorage.setItem("item", JSON.stringify(item))

}