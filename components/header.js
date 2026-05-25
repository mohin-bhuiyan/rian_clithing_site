
function header_load(){



document.querySelector('header').innerHTML=`

         <div class="hero" style="width:100%; height:30vh; background: linear-gradient(-170deg, rgb(122, 122, 122), rgb(23, 23, 23));;">
         <img style="height:100%;" src="assets/images/ChatGPT Image May 12, 2026, 03_21_50 PM.png" alt="">
     </div>
            
        <a href="/index.html"><div class="logo"><span style="font-size:44px">J</span>ing-ra</div></a>
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

// header_load();






function header_scroll(){

console.log(window);


document.addEventListener('scroll', (e)=>{
    console.log(e);
})



}; header_scroll();