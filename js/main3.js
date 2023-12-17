
var input = document.querySelector(".input")
var btnAnimate = document.getElementById("animate")
var number = document.querySelector(".number")


//number.textContent = input.value;

//var maxCounter=input.value;



btnAnimate.addEventListener("click" , function(){
   
    number.textContent=input.value;
})


// parseInt(input.value)
// function
// if, else (conditions)
// setInterval(function(){
//    input = parseInt(input);   
//     while(a == input.value){
//         a++;
//         console.log(a)
//         number.textContent=a
//     }
//     if(i<=input.value){
//         number.textContent=i++
//         console.log(a)     
//     }
// } ,1000 )

