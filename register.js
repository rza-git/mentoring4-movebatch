const register = (username, password) => {

    // lebih dari 4 karakter
    if(password.length <= 4) {
        console.log("Password must be greater than 4 characters")
        return;
    }


    console.log(`Username with: ${username} registered successfully`);
}

register("admin", "test");
