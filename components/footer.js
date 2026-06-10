

function footer(){

    let footer=document.querySelector('footer');

    if(footer){
         footer.innerHTML=`
    
        <h2>zinjir is powered by Jingra.</h2>
    `
    }else{
        footer=document.createElement('footer');
        let body= document.body;
       body.appendChild(footer);
       footer.innerHTML=`
    
        <h2>zinjir is powered by Jingra.</h2>
    `
    }
   
}

footer();
