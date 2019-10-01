
function saveUser (){
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    
    var textLabel= document.getElementsByTagName("label");
    var element = document.createElement("b");
    var content= document.createTextNode(textLabel[0].innerHTML)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    document.getElementById("dates").setAttribute("class", "card");
    var element = document.createElement("p");
    var content= document.createTextNode(" "+firstName)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var textLabel= document.getElementsByTagName("label");
    var element = document.createElement("b");
    var content= document.createTextNode(textLabel[1].innerHTML)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode(" "+lastName)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var textLabel= document.getElementsByTagName("label");
    var element = document.createElement("b");
    var content= document.createTextNode(textLabel[2].innerHTML)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode(" "+phone)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var textLabel= document.getElementsByTagName("label");
    var element = document.createElement("b");
    var content= document.createTextNode(textLabel[3].innerHTML)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);

    var element = document.createElement("p");
    var content= document.createTextNode(" "+address)
    element.appendChild(content)
    document.getElementById("dates").appendChild(element);
   
}


