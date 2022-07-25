//-----------------------------------------------------------------------------------
//                            ## NODE JS ##
//-----------------------------------------------------------------------------------

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


//---------------------------------------------------------------------------------------
// File system in Synchronous way

//const fs=require("fs");

// fs.writeFile("read.txt","qhwb  dhbid  jbd2uid dib3id  ", (err)=>{
//     console.log("file is created");
// });
// we pass themafunction as an argument-acallback
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors.

// fs.appendFile('read.txt',"lorem ipsum eating maggi",(err)=>{
//     console.log("file appended");
// });

// fs.readFile('read.txt','utf8',(err,data)=>{
//     console.log(data);
// })

// fs.mkdir("Avinash", (err)=>{
// console.log("folder created");
// });

// fs.writeFile("Avinash/bio.txt", "my name is Avinash kumar",(err)=>{
//     console.log("files created")
// })

// fs.appendFile('Avinash/bio.txt',"plz like and share my video",(err)=>{
//     console.log("file Appended")
// })

// fs.readFile('Avinash/bio.txt','utf-8',(err,data)=>{
//     ///console.log(data);
//     console.log(err);
// })

// fs.rename('Avinash/bio.txt','Avinash/mybio.txt',(err)=>{
//     console.log('renamed');
// })

// fs.unlink('Avinash/mybio.txt',(err)=>{
//     console.log("file deleted")
// })

// fs.rmdir('Avinash',(err)=>{
//     console.log('folder deleted');
// })


//---------------------------------------------------------------------------------------
// OS MODULE IN NODE JS

const os=require("os");
// console.log(os.arch());
//  const fremm=os.freemem();
//  console.log(fremm);
//  console.log(`${fremm/1024/1024/1024}`);
//console.log(`${os.totalmem()/1024/1024/1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());


//---------------------------------------------------------------------------------------
// PATH MODULE IN NODE JS
// const path = require('path');
// console.log(path.dirname('C:\Users\AV\OneDrive\Documents\PROGRAMMING\PROGRAMMING\javascriptpractice\NODEJS\NODE.js'))
// console.log(path.extname('C:\Users\AV\OneDrive\Documents\PROGRAMMING\PROGRAMMING\javascriptpractice\NODEJS\NODE.js'))
// console.log(path.basename('C:\Users\AV\OneDrive\Documents\PROGRAMMING\PROGRAMMING\javascriptpractice\NODEJS\NODE.js'))
// const myPath=path.parse('C:\Users\AV\OneDrive\Documents\PROGRAMMING\PROGRAMMING\javascriptpractice\NODEJS\NODE.js');
// console.log(myPath.root);


//----------------------------------------------------------------------------------------
// How to CREATE and EXPORT Our Own Modules in Node JS
// const add=(a,b)=>{
//     return a+b;
// };
// const sub=(a,b)=>{
//     return a-b;
// };
// const name="Avinash kumar"

//export default add; //es6
// module.exports.add=add;
// module.exports.sub =sub;
//    or
//module.exports={add,sub,name}

//---------------------------------------------------------------------------------------
// Import NPM Module in Node.JS(NPM package manager)
