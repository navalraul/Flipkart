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

                var Ls = JSON.parse(localStorage.getItem("FlipkartUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == Email) {
                        flag = true;
                    }
                }
                if(!flag) {
                    var userdata = {userName: Name,userEmail: Email,userPassword: Password,userConfirmPassword: ConfirmPassword}
                    Ls.push(userdata);
                    localStorage.setItem("FlipkartUsers",JSON.stringify(Ls))   
                    alert("Registration Successful");
                    window.location.href = `./FlipkartLogin.html`;
                    document.getElementById("FlipkartuserName").value = ""
                    document.getElementById("FlipkartuserEmail").value = ""
                    document.getElementById("FlipkartuserPassword").value = ""
                    document.getElementById("FlipkartuserConfirmpassword").value = ""     
                }
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