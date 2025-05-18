const http = require("http");
const port = 7000;
const server = http.createServer((req,res)=>{
    res.end("Hello form Ec2 behind the ALB with ASG")
});
server.listen(port,()=>{
    console.log(`server is runninf on port ${port}`)
});
