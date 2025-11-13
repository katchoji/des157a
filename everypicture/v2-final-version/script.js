(function(){
    "use strict";
    console.log('reading js');


        
        const myImages = ["curry.png", "oyakodon.png", "salmon.png", "steakdon.png", "sashimi.png"];

        const myText=["Chicken Curry and Rice!", "Oyakodon!", "Salmon, Orzo, and Brussel Sprouts!", "Steak Donburi!", "Sake/Hamachi Sashimi!"]
        let currentImage = 0;
        const slide = document.querySelector('#myimage');
        const slideText = document.querySelector('#mytext p');
        
        document.querySelector('#next').addEventListener('click', nextPhoto);

        document.querySelector('#previous').addEventListener('click', previousPhoto);
        
        function nextPhoto(){
            currentImage++; 

            if(currentImage > myImages.length-1){
                currentImage = 0;
            }

            slide.src = `images/${myImages[currentImage]}`;
            updateSlide();

        }

    
        function previousPhoto(){
            currentImage--; 

            if(currentImage < 0){
                currentImage = myImages.length-1;
            }
            updateSlide();

        }

        function updateSlide(){
            slide.src = `images/${myImages[currentImage]}`;
            slideText.textContent = myText[currentImage];
        }
        
    })();