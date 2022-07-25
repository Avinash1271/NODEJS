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
