let fs = require('fs');

let filename1 = "courseDetails.json"
let filename2 = "sampleData.json"

//Function to read the file synchronously
function readFile1(filename1){
    let data = fs.readFileSync(filename1);
    console.log("\nThe content: "+data);
    console.log("Completed reading file 1");
}

function readFile2(filename2) {
    // Reading the file Synchronously - Blocking rest of execution
    let data = fs.readFileSync(filename2);
    console.log("\n\nThe content of the file is \n\n" + data);
    console.log("Completed reading file2");
}

console.log("About to read file 1");
readFile1(filename1);

console.log("About to read file 2");
readFile2(filename2);

console.log("All done!");
