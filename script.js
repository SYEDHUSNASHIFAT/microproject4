let btn = document.querySelectorAll(".btn");
let input = document.querySelector("#display");
let count = parseFloat(input.innerText);
let reset = document.querySelector("#reset")
let eq = document.querySelector("#equal")
let del = document.querySelector("#delete")

Array.from(btn).forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    input.innerText += e.target.innerText;
  });
});

//reset
function res(){
    input.innerText = " "
}
reset.addEventListener("click",res)

//equal
function equalto(){

    input.innerText = eval(input.innerText)

}
eq.addEventListener('click',equalto)

//delete
function dele(){
    const d = input.innerText
    input.innerText = d.slice(0,-1)
}
del.addEventListener('click',dele)
