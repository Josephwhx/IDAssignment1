/* ====================================== To Adjust quantity of product =================================== */
var plusQuantity = document.getElementsByClassName("btn-plus");
var minusQuantity = document.getElementsByClassName("btn-minus");


/* To increse value of quantity when clicking the plus button */
for (var i = 0; i < plusQuantity.length; i++){
    var button = plusQuantity[i];
    button.addEventListener('click', function(){
        document.getElementById("qty").stepUp(1);
    });
};

/* To decrease value og quantity when clicking the minus button */
for (var i = 0; i < minusQuantity.length; i++){
    var button = minusQuantity[i];
    button.addEventListener('click', function(){
        if (parseInt(document.getElementById("qty").value) > 1){
            document.getElementById("qty").stepDown(1);
        }
    });
};

/* ===================== Create a function to set total to items in cart if there is ================== */
function trueTotal(){
    let valueInCart = localStorage.getItem("total");

    /* Check if there is value in valeInCart or not */
    if (valueInCart){
        var total = valueInCart;
        return total;
    }
}

/* ====================== To adjust the number of item displayed in cart ========================== */
/* ====================== When button is clicked ========================== */
let addToCart = document.querySelectorAll(".btn-addtocart");
var total = parseInt(trueTotal());

for(i = 0; i < addToCart.length; i++){
    let add = addToCart[i];
    add.addEventListener('click', function(){
        /* check if value of qty is positive or not */
        if (parseInt(document.querySelector(".quantity").value) <= 0){

        }
        else if(total == 0){
            let qty = parseInt(document.querySelector(".quantity").value);
            document.querySelector(".cart span").textContent = qty;
            total += qty;
            /* store total into local storage (used to store items in cart when page refresh) */
            localStorage.setItem("total", total);
        }
        else{
            let qty = parseInt(document.querySelector(".quantity").value);
            total += qty;
            document.querySelector(".cart span").textContent = total;
            /* store total into local storage (used to store items in cart when page refresh) */
            localStorage.setItem("total", total);
        }
    });
};

/* =================== To clear items in cart when cart button is clicked ================== */
let cartBtn = document.querySelectorAll(".cart");

for (i = 0; i < cartBtn.length; i++){
    var cBtn = cartBtn[i];
    cBtn.addEventListener("click", function(){
        /* To clear data in local storage */
        total = 0;
        localStorage.setItem("total", total);
        document.querySelector(".cart span").textContent = total;
    });
}

/* ====================== Create function to check local storage for items ================================ */
/* ======== and display on the cart if there is items. (for loading items in cart when page refresh) ========== */
function checkItemsInCart (){
    let item = localStorage.getItem("total");

    /* Check if there is any value in local storage */
    if (item != null){
        /* display no. of items in the cart */
        document.querySelector(".cart span").textContent = item;
    }
};

/* Call function checkItemsInCart () */
checkItemsInCart();