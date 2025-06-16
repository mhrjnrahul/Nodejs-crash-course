import os from "os";
// Get the operating system platform

//userinfo
console.log(os.userInfo().username); // prints the username of the current user

//totalMemory
console.log(`Total Memory: ${os.totalmem() / (1024 * 1024)} MB`); // prints total memory in MB

//Free Memory
console.log(`Free Memory: ${os.freemem() / (1024 * 1024)} MB`); // prints free memory in MB

//cpus
console.log("CPU Info: ", os.cpus()); // prints information about each CPU core 