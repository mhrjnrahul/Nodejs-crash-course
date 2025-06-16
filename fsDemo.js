import fs, { read } from "fs";

// //readfile - callback version (default)
// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if(err){
//         throw err;
//     } else {
//         console.log("Callback version: ", data);
//     }
// })

// //sync version
// //sync version blocks the event loop
// //doesn't have a callback
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log("Sync version: ", data);

// //promise version
// //.then() and async/await
// fs.promises.readFile("test.txt", "utf-8")
//     .then(data => {
//         console.log("Promise version: ", data);
//     })
//     .catch(err => {
//         console.error("Error reading file with promises: ", err);
//     });

// //async/await version
// const readFile = async () => {
//     try {
//         const data = await fs.promises.readFile("test.txt", "utf8");
//         console.log("Async/Await version: ", data);
//     } catch (err) {
//         console.error("Error reading file with async/await: ", err);
//     }
// }

// readFile();

// //writefile - async version
// const writefile = async () => {
//     try {
//         await fs.promises.writeFile("test.txt", "Hello, World!", "utf-8");
//         console.log("File written successfully");
//     } catch (err) {
//         console.error("Error writing file: ", err);
//     }
// }

// writefile();

const appendFile = async () => {
    try {
        await fs.promises.appendFile("test.txt", "\nAppended text!", "utf-8");
        console.log("File appended successfully");
    } catch (err) {
        console.error("Error appending file: ", err);
    }
}

appendFile();

