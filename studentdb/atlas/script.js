async  function getmentors(){
    let data =  await fetch("http://localhost:3000/mentors");
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
    let data = await fetch("http://localhost:3000/students");
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
async function addmentor(){
    let data = {
    "name": document.getElementById("mn").value,
    "students": [document.getElementById('st').value]};
    console.log(data);
   let res = await fetch("http://localhost:3000/mentor",
   {
    method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-Type":"application/json"},
});
console.log(res);
}
async function getallstudents(){
    console.log('hii'+ document.getElementById('mentor').value);
    let name = document.getElementById('mentor').value;
    let res = await fetch("http://localhost:3000/mentors/"+name);
    let data = await res.json();
    console.log(data);
    let c = document.getElementById('list2').innerHTML="";
    data.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML=element;
        let ul = document.getElementById('list2'); 
        ul.append(li);
        console.log(element)
    });
}