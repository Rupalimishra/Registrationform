
function myFunction() {
    var person = {
        name: "",
        company: "",
        technology: "",
        phone: "",
        location: "",
        photo: ""
    }

    person.name = document.getElementById("name").value;
    person.company = document.getElementById("company").value;
    person.technology = document.getElementById("technology").value;
    person.phone = document.getElementById("phone").value;
    person.location = document.getElementById("location").value;
    person.photo = document.getElementById("photo").value;
    document.getElementById("text").innerHTML = person.name;
    document.getElementById("text1").innerHTML = person.location;
    document.getElementById("text2").innerHTML = person.phone;
    document.getElementById("com1").innerHTML = person.company;
    document.getElementById("com2").innerHTML = person.technology;
   var y = document.getElementById("display1");
   var x = document.getElementById("display2");
    if (y.style.display == "block") {
        y.style.display="none";
        x.style.display="block";
    } else {
        y.style.display = "block";
        x.style.display="none";
    }

} 
   
/*
function myFunction() {
    var employee = []
    var person = {
        key: name,
        value: document.getElementById("name").value
    }
    employee.push(person);
    var person1 = {
        key: company,
        value: document.getElementById("company").value
    }
    employee.push(person1);
    var person2 = {
        key: technology,
        value: document.getElementById("technology").value
    }
    employee.push(person2);
    var person3 = {
        key: phone,
        value: document.getElementById("phone").value
    }
    employee.push(person3);
    var person4 = {
        key: location,
        value: document.getElementById("loaction").value
    }
    employee.push(person4);
    var person5 = {
        key: photo,
        value: document.getElementById("photo").value
    }
}*/
