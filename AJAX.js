console.log("Ajax in one lecture")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicke fetchbtn button")

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getAllResponseHeaders('content-type','application/json');

    // what to do on progress (optional)
    xhr.onprogress = function(){
        console.log('on progress');
    }

    // what to do when response is ready
xhr.onload = function (){
    if(this.status ===200){
        console.log(this.responseText)
    }else{
        console.log("some error occured")
    }
    
}
// send the request
params = `{"name":"test555","salary":"123","age":"23"}`
xhr.send();

console.log("We are done")
}