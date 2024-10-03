 
function firstCallBackMethod() {
    // Logging a message inside the callback method
    console.log("Hi I am the first call back method");
}
console.log("Going to call setTimeout with a delay of 6 seconds");

// Call the function firstCallBackMethod after a delay using setTimeout
setTimeout(firstCallBackMethod, 6000);
