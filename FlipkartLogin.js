function login (event){
    // alert ("working")
    event.preventDefault();

    var userEmail = document.getElementById("FlipkartuserEmail").value;
    var userPassword = document.getElementById("FlipkartuserPassword").value;

    var Ls = JSON.parse(localStorage.getItem("FlipkartUsers"));

    var FlipkartcurrentUser;
    var flag = false;
    for (var i=0;i< Ls.length;i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            FlipkartcurrentUser = Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("FlipkartcurrentUser",JSON.stringify(FlipkartcurrentUser))
        window.location.href = './FlipkartHome.html';
        alert("Login Successful")
    }else {
        alert("Credential not Matched")
    }

}