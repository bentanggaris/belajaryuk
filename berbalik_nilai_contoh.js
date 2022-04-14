function cek1() {
	var dikt = document.getElementById("dikt1");

	if(dikt.value=="40.000"||dikt.value=="40000"||dikt.value=="40.000,00"){
		document.getElementById("dikt1").style="background-color: #CBDBF6";
	} else {
		document.getElementById("dikt1").style="background-color: #FF9F98";
	}
}

function cek2(){
	var dikt = document.getElementById("dikt2");

	if (dikt.value=="50.000"||dikt.value=="50000"||dikt.value=="50.000,00") {
		document.getElementById("dikt2").style="background-color: #CBDBF6";
	} else {
		document.getElementById("dikt2").style="background-color: #FF9F98";
	}
}

function cek3(){
	var dikt = document.getElementById("dikt3");

	if (dikt.value=="200.000,00"||dikt.value=="200.000"||dikt.value=="200000") {
		document.getElementById("dikt3").style="background-color: #CBDBF6";
	} else {
		document.getElementById("dikt3").style="background-color: #FF9F98";
	}
}

function cek4(){
	var dikt = document.getElementById("dikt4");

	if (dikt.value=="5") {
		document.getElementById("dikt4").style="background-color: #CBDBF6";
	} else {
		document.getElementById("dikt4").style="background-color: #FF9F98";
	}
}

function cek5(){
	var dikt = document.getElementById("dikt5");

	if (dikt.value=="4") {
		document.getElementById("dikt5").style="background-color: #CBDBF6";
	} else {
		document.getElementById("dikt5").style="background-color: #FF9F98";
	}
}