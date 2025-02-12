// setInterval(() => {
//     console.log("Hello, World!"); 
// }, 2000);

// 🛠 Example: Stopping setInterval After 5 Seconds
let count = 0;

let intervalID = setInterval(() => {
    console.log(`Counter: ${count}`);
    count++;

    if (count > 5) {
        clearInterval(intervalID);
        console.log("Interval Stopped!");
    }
}, 1000);
