let add_card_btn= document.querySelector('.add-to-cart');
let cartData= localStorage.getItem('cartData');

add_card_btn.addEventListener('click', ()=>{

          let this_prod_id= add_card_btn.getAttribute('data-id'); //button e save kora id number nibo..
          let size= document.querySelector('.size .size-but.active').innerText;
          let quantity= counter.querySelector('input').value;
          
        //   local storage e cart array thake tahole oita collect korbo, na thakle khali array nibo-----
               let local_data= localStorage.getItem('jingra_cart');
               let cart= local_data ? JSON.parse(local_data) : [];



                                                                            // agee check korbo je ei produc ta ki already loacalstorage e select kora ache kina .. 
               let existing_product= cart.find(item=> item.id===this_prod_id);

                                          //    jodi na thake tahole ei object ta push korbo
               if(!existing_product){
                let new_info_obj= {
                     "id":this_prod_id,
                     "size":size,
                     "quantity":quantity,
                     "color":null
               };
               cart.push(new_info_obj);

          //    ebar loacal storage e pathabo
                localStorage.setItem('jingra_cart',JSON.stringify(cart));

               }else{ 
                alert("Oops! This product is already added!!"+`--${this_prod_id}`)
               }

               console.log(cart)
              header_load()

})