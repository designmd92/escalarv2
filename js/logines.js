var logincode = ["ESCALARPO1Dum","ESCALAR5kJvlD","ESCALAR7JKy5f","ESCALARljpVHl","ESCALARhPKd96"];
var logincodes = ["ESCALARF2Ham","ESCALAR7JDv2D","ESCALAR0J5y5d","ESCALARRjpLH3","ESCALARgPMd98"];

function login() {
    var aux = document.getElementById("codelog").value;
    for(i=0; i<logincode.length; i++){
        if (aux == logincode[i]) {
            window.location = 'docentes.html';
            document.getElementById('wcod').style.display = "none";
            document.getElementById('loginbox').style.display = "none";
            document.getElementById('return').style.display = "none";
            aux.value = "";
        }
        else {
            document.getElementById('wcod').style.display = "block";
            aux.value = "";
        }
        
    }
}

function loginst() {
    var aux = document.getElementById("codelog").value;
    for( i=0; i<logincodes.length; i++){    
        if (aux == logincodes[i]) {
            window.location = 'alumnos.html';
            document.getElementById('wcod').style.display = "none";
            document.getElementById('loginbox').style.display = "none";
            document.getElementById('return').style.display = "none";
            aux.value = "";
        }
        else {
            document.getElementById('wcod').style.display = "block";
            aux.value = "";
        }
    }
}