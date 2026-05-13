
function header_load(){



document.querySelector('header').innerHTML=`
            
        <div class="logo">BD zone <br> fashion</div>
        <nav>
            <a href="index.html">Home</a>
            <a href="">Shop</a>
            <a href="">Collection</a>
            <a href="">About</a>
        </nav>

        <!-- <div class="head-others"> -->
             <div class="search">
                <input type="search" name="" id="">
                <img class="search_icon" src="" alt="">
                <img src="assets/fonts&icons/magnifying-glass-solid.svg" alt="">
             </div>

             <div class="cart">
                <img src="assets/fonts&icons/shopping-cart-trolley-icon.webp" alt="">
                <div class="count-dis">
                    2
                </div>
            </div>
            <!-- search , addto chart buttons -->
        <!-- </div> -->
     

`

}

header_load();