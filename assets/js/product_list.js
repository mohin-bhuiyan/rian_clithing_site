
fetch("/assets/productList.json")
.then(response => response.json())
.then(data => product_display(data))





function product_display(arr){


let prod_list= document.querySelector('.prod-list');

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
        
        prod_list.append(card);

})


}