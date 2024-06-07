const login = (username, password) => {

    if(username === "admin" && password === "admin") {
        console.log("Login Successfully")
    } else {
        console.log("Wrong Email or Password")
    }
}

login("admin", "admin");
