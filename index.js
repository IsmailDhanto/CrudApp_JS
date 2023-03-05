var selectedRaw = null;
function onFormSubmit(){

}


//retrieve the data 

function readFromData(){
    FormData["pruductCode"] = document.getElementById("pruductCode").value;
    FormData["product"] = document.getElementById("product").value;
    FormData["qty"] = document.getElementById("qty").value;
    FormData["perprice"] = document.getElementById("perprice").value;
    return FormData;


}

//insert the data 

function insertData(data){
    var table = document.createElement("storelist").getElementsByTagName('tbody')[0];
    var newRaw = table.insertRaw(table.lenght);
    var cell1 = newRaw.insertCell(0);
    

}