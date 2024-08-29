const { log } = require('console');
const os = require('os');

// infor about current user
// const user = os.userInfo()
// console.log(user);

// // system uptime
// console.log("System uptime is ", os.uptime());

// // system cpus
// console.log(os.cpus());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS.name);
console.log(currentOS.release);
console.log(currentOS.totalMemory);
