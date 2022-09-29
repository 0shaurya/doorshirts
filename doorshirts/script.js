function aFunction() {
	if ((document.getElementById("name").value == "") ||
		
		(document.getElementById("S").checked == false &&
		document.getElementById("M").checked == false &&
		document.getElementById("L").checked == false &&
		document.getElementById("XL").checked == false &&
		document.getElementById("XXL").checked == false) ||
		
		(document.getElementById("image").value == "") ||

		(document.getElementById("Venmo").checked == false &&
		document.getElementById("Cash").checked == false)) {

		submitButton.disabled = true;
	    document.getElementById("submit_form").style.opacity = ".5";
	} else {
	    submitButton.disabled = false;
	    document.getElementById("submit_form").style.opacity = "1";
	}
}

const timeout1 = setInterval(aFunction, 10);