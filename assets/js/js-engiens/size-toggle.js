
// এইটা পরে কারট পেজ এ লাগামু।। 

// size toggle
let size_wraper= document.querySelector('.size');
let buttons= size_wraper.querySelectorAll('.size-but')

buttons.forEach(element => {

    element.addEventListener('click', ()=>{

        if(element.classList.contains("active")){
            // jodi ei button already acive hoy tahole sob button er active remove korbe.. 
             buttons.forEach(but=>{
                but.classList.remove('active');
             })
             
        }else{/* ar jodi active na tahke tahoel agee sob gulur theke remove koro ebong sudhu ei ektay active koro*/
                  
                   buttons.forEach(but=>{
                but.classList.remove('active')
             });
             
              element.classList.add('active');
        }
            

    })

});