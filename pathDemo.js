import path from "path";
import url from "url";
// For ES modules, we need to resolve the current directory


const filePath = './dir1/dir2/file.txt';

//basename
console.log("Base name: ", path.basename(filePath)); // file.txt

//dirname
console.log("Directory name: ", path.dirname(filePath)); // ./dir1/dir2

//extension
console.log("Extension: ", path.extname(filePath)); // .txt

//parse
console.log("Parsed: ", path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("__filename: ", __filename);
console.log("__dirname: ", __dirname);

//join
const joinedPath = path.join(__dirname, 'dir1', 'dir2', 'file.txt');
console.log("Joined path: ", joinedPath); // /path/to/current/dir/dir1/dir2/file.txt

//resolve
const resolvedPath = path.resolve('dir1', 'dir2', 'file.txt');
console.log("Resolved path: ", resolvedPath); // /path/to/current/dir/dir1/dir2/file.txt 
