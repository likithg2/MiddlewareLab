const express=require('express');
const app=express();
const ExpressError =require("./ExpressError");

//middlewares
app.use((req,res,next)=>{
    console.log("1st middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("2nd middleware");
    next();
});

app.use((req,res,next)=>{
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.path,req.responseTime,req.hostname);
    console.log("logger middleware");
    next();
});

app.use((err,req,res,next)=>{
    let{status=500,message="some error"}=err;
    res.status(status).send(message);
});

app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED!!");
})

app.get("/api",(req,res)=>{
    res.send("data");
})

app.get('/admin',(req,res)=>{
    throw new ExpressError(403,"Access Forbidden");
})

app.get("/",(req,res)=>{
    res.send("server working properly");
})

app.use((err,req,res,next)=>{
    console.log("-----ERROR-----");
    next(err);
})

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.get("/random",(req,res)=>{
    res.send("random page")
})

//404
app.use((req,res)=>{
    res.status(404).send("Page not Working!!");
});

app.listen(8080,()=>{
    console.log("listening to port 8080");
})