const inputText= document.getElementById("TodoTitle");
const list=document.getElementById("todos");
const countdown=document.getElementsByClassName("countdown")[0];
let initialCount=10;
const timer = setInterval(Countdown , 1000);
function Countdown(){
    initialCount -= 1;
    countdown.innerText= initialCount;
    if(initialCount<=0){
        clearInterval(timer);
    }
}
const Todos = [];
function onClickSubmitButton() {
    
    Todos.push(inputText.value)
    inputText.value=" ";
    Todos.forEach((todo) => {
        list.innerHTML += "<li>" + todo + "</li>"
    })
}
