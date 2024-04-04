
// any parameters that have been given a default parameter, the paramters after that parameter
// must also have a default value.
function login (password = "no password", username = 'jake'){ 
    console.log(`${username} has a password of ${password}`)
}

login('911')