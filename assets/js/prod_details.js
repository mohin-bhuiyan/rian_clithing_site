
fetch('/assets/productList.json')
.then(response=> response.json())
.then(data => get_id(data))





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





