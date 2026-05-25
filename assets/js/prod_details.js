
fetch('/assets/productList.json')
.then(response=> response.json())
.then(data => {
        get_id(data)
        suggestion(data);
})





// get the product id form url

function get_id(prod_list_json){

    // console.log(prod_list_json);

    // get id rom url
    const param = new URLSearchParams(document.location.search);
    let prod_id= parseInt(param.get('id'));
    //id peyegechi 


     //find the products object form json-----

    //  let gotten_product= prod_list_json.find(element => element.id===prod_id);

    //  console.log(gotten_product);

    // another

    let gotten_product=null;

    for(let itemss of prod_list_json){

        if (itemss.id===prod_id){

             gotten_product=itemss;
            break;
        }
    }

    // console.log(gotten_product);





    // dom manipulation
    let big_image= document.querySelector('.img-big img');
    let title= document.querySelector('h1');
    let price= document.querySelector('h3');
   


    if(gotten_product){
        
    big_image.src=gotten_product.image;
    title.textContent=gotten_product.title;
     price.textContent=gotten_product.price +" "+'BDT';

    }else{
         big_image.src='';
        let main=document.querySelector('main');
        main.innerHTML=`<h1>No Content Available.....</h1>`;
        main.style.padding="40px";

    }
    

}




// size toggle
let size_wraper= document.querySelector('.size');
let buttons= size_wraper.querySelectorAll('button')

buttons.forEach(element => {

    element.addEventListener('click', ()=>{

        if(element.classList.contains("active")){
            // jodi ei button taalready acive hoy tahole sob button er active remove korbe.. 
             buttons.forEach(but=>{
                but.classList.remove('active');
             })
             
        }else{/* ar jodi acive na tahke tahoel agee sob gulur theke remove koro ebong sudhu ei ektay active koro*/
                  
                   buttons.forEach(but=>{
                but.classList.remove('active')
             });
             
              element.classList.add('active');
        }
            

    })

});






// ---quantity up and down ----
 let counter= document.querySelector('.q-wrapper');

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

if(counter){

    // up  button
    let count_display= counter.querySelector('input');

    counter.querySelector('.up').addEventListener('click', ()=>{
                                    for_up(count_display);
                                    });


    counter.querySelector('.down').addEventListener('click', ()=>{
                                    for_down(count_display);
                                    });                                

}else{
    console.log("counter is not found");
}







// suggestion function
function suggestion(array){

    let arr_length= array.length;

    let check_arr=[]; //bachai kora random id number ekhane rakhbo

    while(check_arr.length < 8){ //8ta random num nibo
        let random= Math.floor(Math.random()*arr_length);
        console.log(random);

        if(!check_arr.includes(random)){
            check_arr.push(random); 
        }
        
    }
    console.log(check_arr);
    
//  random num gulu diye prod_list theke bachaikora index er object gulu nibo.. 
   let store_object= check_arr.map((item)=>{
       return array[item];
    })

    product_display(store_object)//notun array ta nicher functon e pathabo
}







// create and add cards

function product_display(arr){

  console.log(arr.length);

let suggest_list= document.querySelector('.suggest-row');

arr.forEach((data)=>{

        let card= document.createElement('a');
        card.className='card';
        card.href=`product_details.html?id=${data.id}`;
        card.innerHTML=`
            <div class="image">
                        <img src="${data.image}" alt="">
                    </div>

                    <div class="card-info">
                        <!-- left -->
                        
                            <h3 class="title">${data.title}</h3>
                           
                        <div class="right-side">

                        <div class="price">${data.price} BDT</div>
                        <div class="add-cart-icon"><img src="assets/fonts&icons/shopping-cart-trolley-icon.webp" alt=""></div>
                        </div>
                    </div>
        `
        
        suggest_list.append(card);

})


}



