
// let mobileBar =  document.querySelector(".mobileBar")
// mobileBar.style.display = "none";

document.querySelector(".mobile").addEventListener("click", () =>
{

  document.querySelector(".desktop").classList.toggle("show");
});
let scroll = window.pageYOffset;
const textContaktButtom = document.querySelector(".textContaktButtom")
bottomCounter = () =>
{

let  number1 = 0;
let  number2 = 0;
let  number3 = 0;

const counter = setInterval(() =>{
number1 ++;


if( number1 == 100)
    {
    clearTimeout(counter);
    }

},50);

const counter2 = setInterval(() =>{

    number2 ++;


        if( number2 == 150)
            {
            clearTimeout(counter2);
            }
       
    },50);

    

    const counter3 = setInterval(() =>{

        number3 ++;
    
     
                if( number3 == 123)
                    {
                    clearTimeout(counter3);
                    }
                    
                    textContaktButtom.innerHTML = `Zadowoleni klienci: ${number1} Wykonane projekty: ${number2}  Partnerzy biznesowi: ${number3}  `;
        },50);
        
    
};
window.addEventListener("scroll", () => {
itemLocation = () => {






if(scroll >= textContaktButtom.offsetTop  ){
    bottomCounter();
}
else
{

}




};
itemLocation();
});

