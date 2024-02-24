let currentUsers = ["shariq", "asim", "asad", "shahmir", "danish"];
let newUsers = ["SHAHMIR", "junaid", "asim", "moiz", "hunain"];

newUsers.forEach((user) => {
    if(currentUsers.includes(user.toLowerCase() || user.toUpperCase())) {
        console.log(`The username ${user} already in use, please enter another username.`);
    } else {
        console.log(`The username ${user} is available.`)
    }
});