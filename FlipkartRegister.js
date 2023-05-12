function Register(event) {
    // alert("Working");
    event.preventDefault();

    var Name = document.getElementById("FlipkartuserName").value;
    // console.log(Name,"Name here")
    var Email = document.getElementById("FlipkartuserEmail").value;
    // console.log(Email,"Email here");
    var Password = document.getElementById("FlipkartuserPassword").value;
    // console.log(Password,"Password here");
    var ConfirmPassword = document.getElementById("FlipkartuserConfirmpassword").value;
    // console.log(ConfirmPassword,"ConfirmPassword here");

    if(Name && Email && Password && ConfirmPassword){
        if(Password.length >=8 && ConfirmPassword){
            if(Password == ConfirmPassword){
        

        localStorage.setItem()        

            }else{
                console.log("Password not Matched")
                alert("Password not Matched")
            }
        }else{
            console.log("Password should be alteast 8 words")
            alert("Password should be alteast 8 words")
        }
    }else{
        console.log("All Fields are Mandatory")
        alert("All Fields are Mandatory")
    }
}