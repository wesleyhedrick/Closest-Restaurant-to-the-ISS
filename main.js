// api.openweathermap.org/data/2.5/weather?q=greenville,sc&appid=a7c44422724113b2ded31d6eb093c696
const corsFix = "https://cors-anywhere.herokuapp.com/"
const data = null;

const ajax = (url, method='GET')=>{
    if(!url) return console.error("Request Required")
    // if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        console.log(req.response);
        if(req.readyState !== 4) return req.response;
        if(req.status === 200) console.log(req.response)
        // callback("")
    })
    request.open(method,url)


    //Setting some headers...Don't sweat it right now
    request.setRequestHeader("X-Requested-With","XMLHttpRequest");
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    
    request.setRequestHeader("Content-Type","application/json");
    request.setRequestHeader("Accept","application/json");

    request.send()
}

let city = 'pottstown'
let state = 'pa';
let country = 'us'
let url = `api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=a7c44422724113b2ded31d6eb093c696`
console.log(ajax(corsFix + url));