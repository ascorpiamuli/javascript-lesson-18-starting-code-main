import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

//A callback is used to initialize the promise. This callback is passed two arguments: 
//a resolve callback used to resolve the promise with a value or the result of another
// promise, 
//and a reject callback used to reject the promise with a provided reason or error.

//async await
//async keyword makes a function return a promise which makes
//it easy to deal with asynchronous code
async function loadPage(){
 //when we return a value in async await functionit is directly converted into a resolve function
  await loadProductsFetch();
   await new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
   })

   renderOrderSummary();
   renderPaymentSummary();
}
loadPage();
/*
Promise.all([
   loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
   })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})*/

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
