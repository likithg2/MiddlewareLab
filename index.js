const express=require('express');
const app=express();

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



app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        return next();
    }
    res.status(403).send("Access Denied!!");
})

app.get("/api",(req,res)=>{
    res.send("data");
})

app.get("/",(req,res)=>{
    res.send("server working properly");
})

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