const http=require("node:http");
const server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    res.end("backend is working....");
});
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});