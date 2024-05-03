import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

//A callback is used to initialize the promise. This callback is passed two arguments: 
//a resolve callback used to resolve the promise with a value or the result of another
// promise, 
//and a reject callback used to reject the promise with a provided reason or error.
Promise.all([
    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve();
        });
   }),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
   })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

/*new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    })

}).then(()=>{
   return new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
    });
   });

}).then(()=>{
   renderOrderSummary();
   renderPaymentSummary();
});
/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })

})*/
