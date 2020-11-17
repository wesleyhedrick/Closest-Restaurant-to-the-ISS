const ajax = (url, callback, method = "GET") => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (evt) => {
      let req = evt.target;
      if (req.readyState !== 4) return;
      if (req.status === 200 || req.status === 304) return callback(req.response); //this is all on one line
      callback(null, req.status);
    });
    request.open(method, url);
  
    request.send();
};

export default ajax;