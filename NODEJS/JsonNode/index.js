// JSON stands for JavaScript Object Notation.
// JSON isalightweight
// format for storing and transporting data.
// JSOD is often used when data is sent fromaserver toaweb page.

const fs=require('fs');
const bioData={
    name:"Avinash",
    age:26,
    channel:"Avinash kumar",
};

const jsonData=JSON.stringify(bioData);//object to json
// console.log(jsonData)     //{"name":"Avinash","age":26,"channel":"Avinash kumar"}
const objData=JSON.parse(jsonData); //json to object
// console.log(objData)    //{ name: 'Avinash', age: 26, channel: 'Avinash kumar' }

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err, data)=>{
   console.log(data);
   console.log(objData);
}); 