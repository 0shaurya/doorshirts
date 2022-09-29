function bFunction() {
	if (document.getElementById("Venmo").checked == false) {
		document.getElementById("VenmoSelected").style.display = "none"
	}

	if (document.getElementById("Cash").checked == false) {
		document.getElementById("CashSelected").style.display = "none"
	}
	
	if (document.getElementById("Venmo").checked == true) {
		document.getElementById("VenmoSelected").style.display = "block"
	} 

	if (document.getElementById("Cash").checked == true) {
		document.getElementById("CashSelected").style.display = "block"
	}
}

const timeout3 = setInterval(bFunction, 10);