import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import { getCurrentEnvironment } from './Env/env';
export  default class Server{
     app :express.Application = express();
     constructor(){
     this.configureBodyParser();
     this.setMongoDB();
     }
     configureBodyParser(){
        this.app.use(bodyParser.urlencoded({extended:true}));
     }

     setMongoDB(){
        
        mongoose.connect(getCurrentEnvironment().db_url).then((value)=>{
        console.log("Database Connected");
        }).catch((e)=>{
        console.log(e);
        });
     }

}