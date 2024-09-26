let myPromise1 = new Promise((display, rejet) => {
    setTimeout(() =>{
        display("Promise 1 ")
    },6000)
})

let myPromise2 = new Promise((display,reject) => {
    setTimeout(() => {
      display("Promise 2 ")
    },3000)})


// myPromise1.then((message) =>{
//     console.log(message + "From callback 1")
// myPromise2.then((message) =>{
//     console.log(message +"From callback 2")
//     })  
// })



myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
  myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage)
})

