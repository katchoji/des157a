(function(){
    "use strict";
    console.log('reading js');


        
        const myImages = ["curry.png", "oyakodon.png", "salmon.png", "steakdon.png", "sashimi.png"];

        const myText=["Chicken Curry and Rice! One of the first things I learned to cook myself when I started trying to cook more seriouly. It is a warm hearty meal that always reminds me of home.", "Oyakodon! An easy peasy chicken and egg meal that is something I always try to have on a rainy day. I love eggs, so this meal is usually what I'll make when I don't really have anything in mind to cook.", "Salmon, Orzo, and Brussel Sprouts! I love to pair cooked fish with something creamy. I've always loved salmon, but I had never tried to make orzo or brussel sprouts before and it was fun to try! A summer comfort meal.", "Steak Donburi! I love to challenge myself by cooking steaks since I'm typically not the best with time management. Always a delicious experiment.", "Sake/Hamachi Sashimi! Favorite food of all time! Love the texture and fresh taste of raw sashimi and could eat it every day!"]
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