const express=require("express");
const bodyparser=require("body-parser")
const http=require("http")
app=express()
var cors = require('cors');
app.use(cors());
app.use(bodyparser.json())
app.listen(3000)
let data=[
    {
        regno:124157065,
        cgpa:8.94
    },
    {
        regno:124157010,
        cgpa:7.41
    }
]
app.get("/",function(req,res)
{
    res.send("Hello World")
})
app.get("/studata",function(req,res)
{
    res.send(data)
})
app.post("/studata",function(req,res)
{
    data.push({regno:req.body.regno,cgpa:req.body.cgpa})
})
function getdata(no)
{
    let res
    for(i=0;i<data.length;i++)
    {
        if(data[i].regno==no)
        {
            res=data[i]
        }
    }
    return res
}
function putdata(no,newdata)
{
    for(i=0;i<data.length;i++)
    {
        if(data[i].regno==no)
        {
            console.log("*****")
            data[i]=newdata
        }
    }
}
function patchdata(no,newcg)
{
    // console.log(newcg)
    for(i=0;i<data.length;i++)
    {
        if(data[i].regno==no)
        {
            // console.log("*****")
            data[i].cgpa=newcg
        }
    }
}
function deletedata(no)
{
    for(i=0;i<data.length;i++)
    {
        if(data[i].regno==no)
        {
            data.pop(data[i])
        }
    }
}
app.get("/studata/:regnumber",function(req,res)
{
res.send(getdata(req.params.regnumber))
})
app.put("/studata/:regnumber",function(req,res)
{
    putdata(req.params.regnumber,{regno:req.body.regno,cgpa:req.body.cgpa})
})
app.patch("/studata/:regnumber",function(req,res)
{
    console.log("request got")
    console.log(req.params.regnumber)
    console.log(req.body)
    patchdata(req.params.regnumber,req.body.cgpa)
})
app.delete("/studata/:regnumber",function(req,res)
{
   deletedata(req.params.regnumber)
})
// fetch("http://localhost:3000/studata")
// .then((response) => response.json())
// .then((json) => console.log(json));