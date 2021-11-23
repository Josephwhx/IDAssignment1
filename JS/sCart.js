/* ====================================== To Adjust quantity of product =================================== */
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

/* ====================== To adjust the number of item displayed in cart ========================== */
let addToCart = document.querySelectorAll(".btn-addtocart");
let total = 0;

for(i = 0; i < addToCart.length; i++){
    let add = addToCart[i];
    add.addEventListener('click', function(){
        if(total == 0){
            let qty = parseInt(document.querySelector(".quantity").value);
            document.querySelector(".cart span").textContent = qty;
            total += qty;
        }
        else{
            let qty = parseInt(document.querySelector(".quantity").value);
            total += qty;
            document.querySelector(".cart span").textContent = total;
        }
    });
}
