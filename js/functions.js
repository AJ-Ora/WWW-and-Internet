function GetTime() {
    document.getElementById("randominfo").innerHTML = Date();
}

function HelloWorld() {
	document.getElementById("randominfo").innerHTML = "Hello world!";
}

function GetRandomNumber() {
	document.getElementById("randominfo").innerHTML = Math.random();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function validateForm() {
	if (document.forms["myForm"]["name"].value==null || document.forms["myForm"]["name"].value=="")
	{
		alert("Name must be filled out!");
		return false;
	}
	if (document.forms["myForm"]["email"].value==null || document.forms["myForm"]["email"].value=="")
	{
		alert("Email must be filled out!");
		return false;
	}
	return true;
}