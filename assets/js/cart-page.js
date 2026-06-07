
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