//import { createCheckoutSession } from '../services/payments.js';

document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(sessionStorage.getItem('buy_now_item'));
    const parsedProduct = JSON.parse(product.product);
    console.log(parsedProduct);

    document.getElementById('pname').innerHTML = `<strong>${parsedProduct.name}</strong>`;
    document.getElementById('pprice').innerHTML = `€ ${product.total_price}`;
    document.getElementById('pcond').innerHTML = `<i>Condition: ${parsedProduct.condition}</i>`;
    document.getElementById('pimg').src = parsedProduct.image;

     const checkoutData = {
            title: parsedProduct.name,
            description: parsedProduct.description || '',
            price: product.total_price,
        };


    new createCheckoutSession(checkoutData);
   
});
