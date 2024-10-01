
// let mobileBar =  document.querySelector(".mobileBar")
// mobileBar.style.display = "none";

document.querySelector(".mobile").addEventListener("click", () =>
{

  document.querySelector(".desktop").classList.toggle("show");
});


let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let contaktImage = document.querySelector(".contaktImage");



one.addEventListener("mousemove", () =>
{
    
    contaktImage.style.background = "url(/image/mainImage3.webp) center";
    contaktImage.style.height = '85%';
    contaktImage.style.width = '100%';

    contaktImage.style.backgroundSize = 'cover';
    contaktImage.style.backgroundAttachment = 'fixed';
    contaktImage.style.transition = '.5s ease-out';
    contaktImage.style.flexDirection = 'column';
});

two.addEventListener("mousemove", () =>
    {
        
        contaktImage.style.background = "url(/image/mainImage4.webp) center";
        contaktImage.style.height = '85%';
        contaktImage.style.width = '100%';
    
        contaktImage.style.backgroundSize = 'cover';
        contaktImage.style.backgroundAttachment = 'fixed';
        contaktImage.style.transition = '.5s ease-out';
        contaktImage.style.flexDirection = 'column';
    });

    three.addEventListener("mousemove", () =>
        {
            
          
            contaktImage.style.background = "url(/image/mainImage5.webp) center";
            contaktImage.style.height = '85%';
            contaktImage.style.width = '100%';
        
            contaktImage.style.backgroundSize = 'cover';
            contaktImage.style.backgroundAttachment = 'fixed';
            contaktImage.style.transition = '.5s ease-out';
            contaktImage.style.flexDirection = 'column';
        });

        two.addEventListener("mouseleave", () =>
            {
                contaktImage.style.height = '85%';
                contaktImage.style.width = '100%';
                contaktImage.style.background = 'url(/image/contaktImage.webp) center';
                contaktImage.style.backgroundSize = 'cover';
                contaktImage.style.backgroundAttachment = 'fixed';
                contaktImage.style.flexDirection = 'column';
             
                
            });
            three.addEventListener("mouseleave", () =>
                {
                    contaktImage.style.height = '85%';
                    contaktImage.style.width = '100%';
                    contaktImage.style.background = 'url(/image/contaktImage.webp) center';
                    contaktImage.style.backgroundSize = 'cover';
                    contaktImage.style.backgroundAttachment = 'fixed';
                    contaktImage.style.flexDirection = 'column';
                
         
                });
    
                
                one.addEventListener("mouseleave", () =>
                    {
                        contaktImage.style.height = '85%';
                        contaktImage.style.width = '100%';
                        contaktImage.style.background = 'url(/image/contaktImage.webp) center';
                        contaktImage.style.backgroundSize = 'cover';
                        contaktImage.style.backgroundAttachment = 'fixed';
                        contaktImage.style.flexDirection = 'column';
                
             
                    });
            

        