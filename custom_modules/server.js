const fs = require("fs/promises");
// const fs = require('fs');
// fs.writeFile('index.html', 'Wello, Welcome', function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File Created");
//     }
// }
// );
const createFile = async () => {
    try {
        await fs.writeFile('login.html', 'Welcome to login')
    } catch (error) {
        console.log(error);
    }
};
createFile();