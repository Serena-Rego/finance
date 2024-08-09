import express from 'express';
import sqlitedb from './models/index.js';

const app=express();

app.use(express.json());
app.get('/accounts',async (req,res)=>{
    console.log(req.path);
});

app.listen(8000,()=>{
    console.log("Server started");
});



