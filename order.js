function tFunction() {
	if (document.getElementById("S").checked == false &&
		document.getElementById("M").checked == false &&
		document.getElementById("L").checked == false &&
		document.getElementById("XL").checked == false &&
		document.getElementById("XXL").checked == false) {
		size = "No size selected"
	}
	
	if (document.getElementById("S").checked == true) {
		var size = "S"
	} else if (document.getElementById("M").checked == true) {
		var size = "M"
	} else if (document.getElementById("L").checked == true) {
		var size = "L"
	} else if (document.getElementById("XL").checked == true) {
		var size = "XL"
	} else if (document.getElementById("XXL").checked == true) {
		var size = "XXL"
	}
	
	document.getElementById("subject").value = "Order by " + document.getElementById("name").value;
	document.getElementById("message").value = "New Door Shirt Order by " + document.getElementById("name").value + "\r\n\r\nSize: " + size + "\r\nImage: " + document.getElementById("image").value + "\r\nCaption: " + document.getElementById("caption").value;
}

const timeout2 = setInterval(tFunction, 10);