// The http.createServer() method includes request and response parameters which is supplie

// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.

// The response object can be used to sendaresponse foracurrent HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:





// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.end("Hello from other side Avinash");
// })
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening  to the web server 8000")
// })



const http=require("http");
const server=http.createServer((req, res)=>{
  const data=fs.readFileSync(`${_dirname}/UserApi/userapi.json`, "utf-8");
  const objData=JSON.parse(data); 
 // console.log(req.url);
  if (req.url=="/"){
    res.end("Hello from the home sides");
   }else if (req.url=="/About"){
    res.end("Hello from the AboutUS sides");
   }else if (req.url=="/contact"){
    res.end("Hello from the contactUS sides");
   }else if (req.url=="/userapi"){
    res.writeHead(200,{"content-type": "application/json" });
    res.end(objData[2].name);
   }else{
    res.writeHead(404,{"Content-type": "text/html" });
    res.end("<h1> 404 error pages. Page doesn't exist </h1>");
   }
});
              
server.listen(8000, "127.0.0.1", ()=>{
  console.log("listening to the port no 8000");
});