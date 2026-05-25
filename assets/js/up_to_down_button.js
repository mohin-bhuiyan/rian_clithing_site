

function suggest(){


// ---quantity up and down ---
let count_value=0;


    // function up 
function for_up(){
        
    if(count_value<3){
        count_value++;
         
     console.log(count_value);
    }
}
// function down-----
function for_down(){

    if(count_value>0){
        
        count_value--;
        console.log(count_value);
    }
        
}






// start jadu
let suggest_row= document.querySelector('.suggest-row');
console.dir(suggest_row);

let but_left= document.querySelector('.but-left');
let but_right= document.querySelector('.but-right');

but_right.addEventListener('click', ()=>{
       for_up()
       suggest_row.style.transform=`translateX(-${count_value* (100/4)}%) `
})

but_left.addEventListener('click', ()=>{
       for_down()
       suggest_row.style.transform=`translateX(-${count_value* (100/4)}%) `
})




} 

suggest()