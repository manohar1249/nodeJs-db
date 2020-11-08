const express = require('express');
const mongodb = require('mongodb');
const bodyparser = require('body-parser');
const dotenv = require('dotenv').config();
let cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyparser.json());
//const client = mongodb.MongoClient;
const dburl = process.env.db_url;


app.get('/mentors',async(req,res)=>{
    let connection;
    try{
         connection = await mongodb.MongoClient.connect(dburl);
        let db = connection.db('studentdb');
        let data=await db.collection('mentors').find().toArray();
        res.json(data);
        console.log(connection);
        await connection.close();
    }
    catch(error){
        console.log(connection);
        if(!connection){
          await connection.close();
         console.log(error);
        res.status(500).json(error);
        }
    }
})


app.get('/students',async(req,res)=>{
    let connection;
    try{
         connection = await mongodb.MongoClient.connect(dburl);
        let db = connection.db('studentdb');
        let data=await db.collection('students').find().toArray();
        res.json(data);
        console.log(connection);
        await connection.close();
    }
    catch(error){
        console.log(connection);
        if(!connection){
         // await mongodb.close();
         console.log(error);
        res.status(500).json(error);
        }
    }
})

app.post("/mentor",async(req,res)=>{
    let connection;
    try{
        
        connection=await mongodb.MongoClient.connect(dburl);
        let db = connection.db('studentdb');
        //await db.collection('mentors').insertOne(req.body);
        await db.collection('students').insertOne({name:req.body.students[0],mentor:req.body.name});
        await connection.close();
        console.log('hii'+' '+req.body.students);
        res.status(200).json({
            message:"data inserted"
        });
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.get('/mentors/:name',async(req,res)=>{
    let connection;
    try{
         connection = await mongodb.MongoClient.connect(dburl);
        let db = connection.db('studentdb');
        let data=await db.collection('mentors').findOne({name:req.params.name});
        res.json(data.students);
        console.log(connection);
        await connection.close();
    }
    catch(error){
        console.log(connection);
        if(!connection){
         // await mongodb.close();
         console.log(error);
        res.status(500).json(error);
        }
    }
})
app.listen(3000);
