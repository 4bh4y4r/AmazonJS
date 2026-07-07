export const cart = [];

export function addtoCart(productId){
     let matchingitem = '';
        cart.forEach((item) =>{
            if(productId == item.productId){
                matchingitem = item;
            }

          
        })
        if (matchingitem){
              matchingitem.quantity+=1;
          }
          else{
              cart.push({ productId: productId, quantity: 1});
          }
}

export function updateCart(){
        let cartquantity = 0;

        cart.forEach((item) => {
            cartquantity += item.quantity;
        })


        document.querySelector('.js-cart-quantity').innerHTML = cartquantity;
        
}