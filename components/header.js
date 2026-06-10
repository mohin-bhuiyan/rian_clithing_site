
function header_load(){

    // local storage theke cart numbur nibo
    let from_local=localStorage.getItem('jingra_cart')
    let cart_number;

    if(from_local){
        cart_number= JSON.parse(from_local).length;
    }else{
        cart_number=0;
    }
    console.log(cart_number);



document.querySelector('header').innerHTML=`
                  
         <a class="logo-a" href="/index.html">
             <div class="logo"><span style="font-size:54px">J</span>ingra</div> 
            <!-- <div class="logo"><span style="font-size:54px">z</span>injir</div>-->
        </a>


       
        <nav>
            <a href="index.html">Home</a>
            <a href="">Shop</a>
            <a href="">Collection</a>
            <a href="">About</a>
        </nav>

        
      <!-- head - others -->
        <div class="head-others">
             <!-- <div class="search">
                <input type="search" name="" id="">
                <img class="search_icon" src="" alt="">
                <img src="assets/fonts&icons/magnifying-glass-solid.svg" alt="">
             </div> -->

             <a href="/cart_page.html" class="cart">
                <img src="assets/fonts&icons/shopping-cart-trolley-icon.webp" alt="">
                <div class="count-dis">
                    ${cart_number}
                </div>
            </a>
           
        </div>

`

}

header_load();



function header_scroll(){

// document.addEventListener('scroll', (e)=>{
//     console.log(e);
// })

}; header_scroll();


localStorage.removeItem("jingra_cart");