
function header_load(){



document.querySelector('header').innerHTML=`
                  
         <a class="logo-a" href="/index.html">
            <!-- <div class="logo"><span style="font-size:54px">J</span>ingra</div> -->
             <div class="logo"><span style="font-size:54px">z</span>injir</div>
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
                    2
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