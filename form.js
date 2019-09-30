
function getDate (){
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
   
    document.getElementById("dates").setAttribute("class", "card");
    var element = document.createElement("p");
    var content= document.createTextNode("First Name:"+ " "+firstName)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode("Last Name:"+ " "+lastName)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode("Phone Number:"+ " "+phone)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode("Address:"+ " "+address)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);
   
}


