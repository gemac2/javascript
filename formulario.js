
function getDate (){
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    
    var nameValue = document.getElementById("namevalue");
    nameValue.innerHTML = firstName
    var lastnameValue = document.getElementById("lastNamevalue");
    lastnameValue.innerHTML = lastName
    var phoneValue = document.getElementById("phonevalue");
    phoneValue.innerHTML = phone
    var addressValue = document.getElementById("addressvalue");
    addressValue.innerHTML = address
  
    return false
}

