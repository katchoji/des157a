(function(){
    "use strict";
    console.log('reading js');

    
    const myForm = document.querySelector("#myform");

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        var adj1 = document.querySelector("#adj1").value;
        var noun1 = document.querySelector('#noun1').value;
        var adj2 = document.querySelector('#adj2').value;
        var noun2 = document.querySelector('#noun2').value;
        var adv1 = document.querySelector('#adv1').value;
        var name1 = document.querySelector('#name1').value;
        var noun3 = document.querySelector('#noun3').value;

        let myText;

        if(adj1 == false){
            myText = "please provide an adjective"
            document.querySelector("#adj1").focus();
            
        }

        else if(noun1 == false){
            myText = "please provide a noun"
            document.querySelector("#noun1").focus();
            
        }

        else if(adj2 == false){
            myText = "please provide an adjective"
            document.querySelector("#adj2").focus();
            
        }

        else if(noun2 == false){
            myText = "please provide a location"
            document.querySelector("#noun2").focus();
            
        }

        else if(adv1 == false){
            myText = "please provide an adverb"
            document.querySelector("#adv1").focus();
            
        }

        else if(name1 == false){
            myText = "please provide an adverb"
            document.querySelector("#name1").focus();
            
        }

        else if(noun3 == false){
            myText = "please provide an adverb"
            document.querySelector("#noun3").focus();
            
        }

        else{
            
            myText = (`To make a perfect cake, you need to be very ${adj1}. Cakes are an exact ${noun1} and can be very ${adj2} to master. All you need is a recipe, which you can easily find at a ${noun2}. Read your recipe and gather up all your ingredients, and make sure they are all measured. Then you can begin baking ${adv1}. You can even ask your friend ${name1} to help out. Throw everything in the ${noun3} to bake and you will have yourself a cake in no time!`);

        }

        myForm.innerHTML = myText;

    });
})();