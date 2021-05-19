
const logoJs = document.querySelector('#logoJs');
const body = document.querySelector('body');
const colors = ['red','blue','green','white','yellow','orange'];

 let shadowNumber = Math.floor(Math.random()* colors.length)
body.addEventListener('mousemove',()=>{

let number = 0;



setInterval(() => {
    if(number >= 0){




    
number += shadowNumber

    logoJs.style.boxShadow = `10px 20px 20px ${colors[number++]}`

    }else if( number.length <=  5){

        number += shadowNumber

        logoJs.style.boxShadow = `10px 20px 20px ${colors[number--]}`



        
    }
    






}, 1000);
console.log('działa')





})




