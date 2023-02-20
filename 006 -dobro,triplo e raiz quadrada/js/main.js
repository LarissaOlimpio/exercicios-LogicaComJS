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
    return number*2
}
function calcTriple(number){
    return number*3
}
function squareRoot(number){
    return (number**(1/2)).toFixed(2)
    //Math.sqrt(number)
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