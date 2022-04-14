function cek1() {
	var a = document.getElementById("dikt1");

	if(a.value=="10"){
		document.getElementById("dikt1").style="background-color: #CBDBF6";

	} else {
		document.getElementById("dikt1").style="background-color: #FF9F98";

	}
}

function cek2() {
	var a = document.getElementById("dikt2");

	if(a.value=="6"){
		document.getElementById("dikt2").style="background-color: #CBDBF6";

	} else {
		document.getElementById("dikt2").style="background-color: #FF9F98";

	}
}

function cek3() {
	var a = document.getElementById("dikt3");

	if(a.value=="30.000,00"||a.value=="30.000"||a.value=="30000"){
		document.getElementById("dikt3").style="background-color: #CBDBF6";

	} else {
		document.getElementById("dikt3").style="background-color: #FF9F98";

	}
}

function cek4() {
	var a = document.getElementById("dikt4");

	if(a.value=="25.000,00"||a.value=="25.000"||a.value=="25000"){
		document.getElementById("dikt4").style="background-color: #CBDBF6";

	} else {
		document.getElementById("dikt4").style="background-color: #FF9F98";

	}
}