function changeContents(param) {
	h1 = document.getElementById("h1_demo");
	h1.innerHTML = param;
	h1.style.color = "#ff0000";
}

function getInputValue() {
	username = document.getElementById("username").value;
	alert(username);
	password = document.getElementById("password").value;
	if (username == ""){
		alert("username cant be empty！");
		document.write(new Date());
	}else{
		changeContents(username+","+password);
		document.getElementById("username").value = "";  
		document.getElementById("password").value = "";
	}
}

function test() {
	var message = "hi";
	alert(message)
}

test()