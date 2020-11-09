async  function getmentors(){
    let data =  await fetch("http://localhost:3000/getmentor");
    let res = await data.json();
    let c = document.getElementById('list').innerHTML="";
    res.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML=element.name;
        let ul = document.getElementById('list'); 
        
        ul.append(li);
        //console.log(element.name)
    });
    console.log(res);
}
async  function getstudents(){
    let data = await fetch("http://localhost:3000/getstudents");
    let res = await data.json();
    let c = document.getElementById('list1').innerHTML="";
    res.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML=element.name;
        let ul = document.getElementById('list1'); 
        ul.append(li);
        console.log(element.name)
    });
    //console.log(res);
}


async  function getallstudents(){
    let name = document.getElementById('mentor').value;
    let data = await fetch(`http://localhost:3000/getmentor/${name}`);
    let res = await data.json();
    let c = document.getElementById('list2').innerHTML="";
    res[0]["students"].forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML=element;
        let ul = document.getElementById('list2'); 
        ul.append(li);
        console.log(element)
    });
    console.log(res);
}
async function addmentor(){
    let data = {
        "mn": document.getElementById("mn").value,
    "st": document.getElementById('st').value};
    console.log(data);
   let res = await fetch("http://localhost:3000/addmentor",
   {method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-Type":"application/json"},
});
console.log(res);
}