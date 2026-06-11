


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

// console.log(data);

let from_local= localStorage.getItem('jingra_cart'); //loacal storaage theke data newa hocche.
let cart_data= from_local?JSON.parse(from_local):[];


// local er cart data id gulu diye "data"/main json file e loop kore exect product object ber kore ana
if(cart_data.length>0){

cart_data.forEach(item=>{
        
        let gotten_item = data.find(prod=> parseInt(item.id)===prod.id);
        // console.log(gotten_item);

        // dom manipulation....
        let cart_elem= document.createElement('div');
        cart_elem.setAttribute('data-id',gotten_item.id);
        cart_elem.setAttribute('data-size',item.size)
        cart_elem.className="card";
        card_list.append(cart_elem);
        cart_elem.innerHTML=`

                    <div class="image">
                        <img src="${gotten_item.image}" alt="">
                    </div>

                    <div class="card-info">
                        <!-- left -->
                        <div class="card-info-up">
                            <h3 class="title">${gotten_item.title}</h3>
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
quantity_count()
}else{card_list.innerHTML="NO PRODUCT SELECTED!!!!"}

});
};

cart_list_add();





function quantity_count(){

     let cart_item= document.querySelectorAll(".card");//agee parent card guluke select kore er upore loop calabo

    cart_item.forEach(item=>{

        //ei item er html e stor kora "data-id"
          let item_id= item.getAttribute("data-id");

         let cart_quant_up= item.querySelector(".q-wrapper .up");//buttons
         let cart_quant_dwn= item.querySelector(".q-wrapper .down");
         let cart_quant_input= item.querySelector('.q-wrapper > input');

         cart_quant_up.addEventListener("click", ()=>{
            
                 let input_value=parseInt(cart_quant_input.value);
                 if(input_value<10){
                    input_value++;
                 }   
                cart_quant_input.value= input_value;// page e visual value change korbe

                // local theke data anchi
                let from_local= localStorage.getItem('jingra_cart');
               let cart_data= from_local?JSON.parse(from_local):[];
                  let gotten_lc_data= cart_data.find(lc_data=> parseInt(lc_data.id)===parseInt(item_id));

                  gotten_lc_data.quantity=input_value;//notun valu ta diye dilam locale 

                //   console.log(gotten_lc_data.quantity);
                //   console.log(cart_data);
                  localStorage.setItem('jingra_cart',JSON.stringify(cart_data));
         })
         


    })


}







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



// quantity barano komano eventlistener ta dainacic html card create er pore dewa
// quantity_count()

// 