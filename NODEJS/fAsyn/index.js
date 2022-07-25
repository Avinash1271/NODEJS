// File system in ASynchronous way
// const fs=require("fs");
//import fs from "fs"; //es6

// creatinganew file
// fs.writeFileSync("read.txt", "welcome to my channel");
// fs.writeFileSync("read.txt", "Avinash kumar, welcome to my channel ");
// fs.appendFileSync("read.txt", "How are you thank you");

//const buf_data=fs.readFileSync("read.txt"); 
//console.log(buf_data);
// Node.js includes an additional data type called Buffer
// (not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// while reading fromafile or receiving packets over the network.
// org_data=buf_data.toString();
// console.log(org_data);

//fs.renameSync("read.txt", "readwrite.txt"); 

//creating folder
//fs.mkdirSync("Avinash");
//fs.writeFileSync("Avinash/bio.txt","My name is Avinash kumar");
// const data=fs.readFileSync("Avinash/bio.txt","utf8"); //reading file and encoding it
// console.log(data);

//deleting created file
//fs.unlinkSync("Avinash/bio.txt");
//fs.rmdirSync("Avinash"); //deleting folder