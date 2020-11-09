let student = [{id:1,name:"manohar",mentor:"anil"},
{id:2,name:"hari",mentor:"senthil"}]

let mentor = [{name:"anil",students:['manohar','rais']},
{name:'senthil',students:['hari']}]

const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyparser.json());

app.get("/getmentor",(req,res)=>{
    res.json(mentor);
})
app.get("/getstudents",(req,res)=>{
    res.json(student);

})
app.post("/addmentor",(req,res)=>{
    let count=0;
  let a =  mentor.filter((item) => {
        console.log(item.name);
        console.log(req.body);
        if (item.name == req.body.mn) {
            item.students.push(req.body.st);
            let id1 = student.length+1;
         student.push({id:id1,name:req.body.st,mentor:req.body.mn});
            count = 0;
             return item.name;
        }
        else {
            return "";
        }
    })
    console.log(a);
    if(a==""){
        mentor.push({name:req.body.mn,students:[req.body.st]});
        console.log(mentor);
        let names = req.body.st;
        let id1 = student.length+1;
        student.push({id:id1,name:names});
        console.log(student);
        //res.send('done');
        
    }
   
})
app.get("/getmentor/:name",(req,res)=>{
    let a = mentor.filter((item)=>{
        if(item.name==req.params.name){
            return item;
        }
    })

    res.json(a);
})


app.listen(process.env.PORT || 5000,()=>{
    console.log(dburl);
});
