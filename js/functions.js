function GetTime() {
    document.getElementById("demo").innerHTML = Date();
}

function HelloWorld() {
	document.getElementById("demo").innerHTML = "Hello world!";
}

function GetRandomNumber() {
	document.getElementById("demo").innerHTML = Math.random();
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