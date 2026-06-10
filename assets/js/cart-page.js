
// ---quantity up and down ----
 let counter= document.querySelectorAll('.q-wrapper');
 console.log(counter)

function for_up(count_display){

        let count_value=parseInt(count_display.value);
         if(count_value < 10){
        count_value++;
        count_display.value=count_value;
         }
   
}
// function down-----
function for_down(count_display){
   let count_value=parseInt(count_display.value);

   if(count_value > 1){
    count_value--;
        count_display.value=count_value;
   }
        
}

// counter elemnt ta aceh kina check kora tar por function run kora

if(counter.length > 0){


    counter.forEach(element => {
        
    
    // up  button
    let count_display= element.querySelector('input');

    element.querySelector('.up').addEventListener('click', ()=>{
                                    for_up(count_display);
                                    });


    element.querySelector('.down').addEventListener('click', ()=>{
                                    for_down(count_display);
                                    });   
                                    
             });

}else{
    console.log("counter is not found");
}

console.log(window.location.href);








let card_section= document.querySelector('.card-section');
let checkout_section= document.querySelector('.checkout-section');
let checkout_butt= document.querySelector('.proceed-checkout');
let confirm_ord= document.querySelector('.confirm-order');
let back_chackout= document.querySelector('.back-to-checkout-butt');

// cart list add ....
function cart_list_add(){
          
    fetch("/assets/productList.json")
.then(response => response.json())
.then(data => {

    
// let card_section= document.querySelector('.card-section');
let card_list=document.querySelector('.cart-list-container .cart-list');
card_list.innerHTML="";

console.log(data);

let from_local= localStorage.getItem('jingra_cart'); //loacal storaage theke data newa hocche.
let cart_data= from_local?JSON.parse(from_local):[];


// local er cart data id gulu diye "data"/main json file e loop kore exect product object ber kore ana
cart_data.forEach(item=>{
        
        let gotten_item = data.find(prod=> parseInt(item.id)===prod.id);
        console.log(gotten_item);

        // dom manipulation....
        let cart_elem= document.createElement('div');
        cart_elem.className="card";
        card_list.append(cart_elem);
        cart_elem.innerHTML=`

                    <div class="image">
                        <img src="${gotten_item.image}" alt="">
                    </div>

                    <div class="card-info">
                        <!-- left -->
                        <div class="card-info-up">
                            <h3 class="title">Umar bin dfkd fd  t-shirt</h3>
                            <div class="price">${gotten_item.price} BDT</div>
                            <div class="size"><strong>size: </strong>${item.size}</div>
                        </div>

                      <div class="card-info-dwn"><!---->


                                <!-- quantity-->
                         <div class="quantity">
                               <h4>Quantity</h4>
                                 <div class="q-wrapper">
                                    <button class="down">-</button>
                                    <input type="number" name="" id="" min="0" max="10" value="${item.quantity}">
                                    <button class="up">+</button>
                                       
                                 </div>
                              </div>

                               <button class="card-remove">Remove</button>
                        </div>

                    </div>

                
        `

        
})


// 



});
};

cart_list_add();









// section visible hide and visible
function visi_hide(){

        checkout_butt.addEventListener('click', ()=>{

            card_section.classList.remove('visible-section');
             checkout_section.classList.add('visible-section');
             window.scrollTo(0,0);
        })
        back_chackout.addEventListener('click',()=>{
            card_section.classList.add('visible-section');
             checkout_section.classList.remove('visible-section');
             window.scrollTo(0,0);
        })


}

visi_hide();



// 