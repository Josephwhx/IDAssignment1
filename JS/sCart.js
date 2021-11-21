var plusQuantity = document.getElementsByClassName("btn-plus");
var minusQuantity = document.getElementsByClassName("btn-minus");


/* To increse value of quantity when clicking the plus button */
for (var i = 0; i < plusQuantity.length; i++){
    var button = plusQuantity[i];
    button.addEventListener('click', function(){
        document.getElementById("qty").stepUp(1);
    })
}

/* To decrease value og quantity when clicking the minus button */
for (var i = 0; i < minusQuantity.length; i++){
    var button = minusQuantity[i];
    button.addEventListener('click', function(){
        if (parseInt(document.getElementById("qty").value) > 1){
            document.getElementById("qty").stepDown(1);
        }
    })
}

/* Create function to add items to cart */

/* Create function to update cart number */