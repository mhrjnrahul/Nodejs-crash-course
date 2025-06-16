import url from "url";

const urlString = "https://www.google.com/search?q=nodejs#section1";


//URL object
const urlObject = new URL(urlString); //new object
// console.log("URL Object: ", urlObject);

//format
//takes a URL object and returns a string
const formattedUrl = url.format(urlObject);
console.log("Formatted URL: ", formattedUrl);

//import.meta.url - file Url
const fileUrl = import.meta.url; //current file URL
console.log("File URL: ", fileUrl);

//fileURLToPath
const filePath = url.fileURLToPath(fileUrl); //converts file URL to file path
console.log("File Path: ", filePath);

console.log(urlObject.search);

//searchParams
console.log("Search Params: ", urlObject.searchParams); //prints search params
console.log("Search Params (q): ", urlObject.searchParams.get("q")); //prints value of q param
