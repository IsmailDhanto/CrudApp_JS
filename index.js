var selectedRaw = null;
function onFormSubmit(e){
    event.preventDefault();
    var FormData = readFromData();
    if (selectedRaw === null){
        insertData(FormData)
    }
    else{
        
    }

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
        cell1.innerHTML = data.pruductCode;
    var cell2 = newRaw.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRaw.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRaw.insertCell(3);
        cell4.innerHTML = data.perprice;
    var cell5 = newRaw.insertCell(4);
        cell5.innerHTML = '<button>Edit</button> <button>Delete</button>' 
   
    

}
