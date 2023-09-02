import express from "express";
import Server  from "./server";
const app=new Server().app;
const port=4000;
app.listen(port,()=>{
    console.log("Server up at "+port);
})