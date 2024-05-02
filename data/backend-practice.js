//we instantiate a class(create an object) from the in built class of 
//Xmlhttprequest and save it i a xhr variable.then we add an event listener
//to wait for the domain to be searched in the web for sending a htp request 
//and wait for response.we then load the response in the console.
const xhr=new XMLHttpRequest();
xhr.addEventListener('load',()=>{
console.log(xhr.response);
});
xhr.open('GET','https://www.supersimplebackend.dev');
xhr.send();
//using URL paths to give different responses
