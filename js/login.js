var logincode = ["ESCALARPO1Dum","ESCALAR5kJvlD","ESCALAR7JKy5f","ESCALARljpVHl","ESCALARhPKd96"];
var loginbox = document.getElementById("loginbox");
var cont = 0;

function login() {
    var aux = document.getElementById("codelog");
    for(i=0; i<logincode.length; i++){
        if (aux.value == logincode[i]) {
            loginbox.style.display = "none";
            document.getElementById('wcod').style.visibility = "hidden";
            aux.value = "";
        }
        else {
            document.getElementById('wcod').style.visibility = "visible";
            aux.value = "";
        }
    }
}

function logout() {
    loginbox.style.display = "block";
}