$(document).ready(function(){

	function soalbagian1() {
		let url = "dua_besaran_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.duabesaran1.length);
			$("#randomsoal1").html(data.duabesaran1[random].soal1);
			
			$("#inputjawaban1").html(data.duabesaran1[random].jawab1);
		})
	}

	soalbagian1();

	function jwbsoal1(){		
		let a = parseInt($("#jawaban1").val());
		let b = parseInt($("#inputjawaban1").html());
		
		if(a===b){
			$("#output1").html("&#10004");
			$("#output1").css("color","#5688E0")

		}
		else{
			$("#output1").html("&#128473");
			$("#output1").css("color","#FF5347");
		}
	}
	
	function soalbagian2() {
		let url = "dua_besaran_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.duabesaran2.length);
			$("#randomsoal2").html(data.duabesaran2[random].soal2);
			
			$("#inputjawaban2").html(data.duabesaran2[random].jawab2);
		})
	}

	soalbagian2();
	function jwbsoal2(){		
		let a = parseInt($("#jawaban2").val());
		let b = parseInt($("#inputjawaban2").html());
		
		if(a===b){
			$("#output2").html("&#10004");
			$("#output2").css("color","#5688E0");
		}
		else{
			$("#output2").html("&#128473");
			$("#output2").css("color","#FF5347");

		}
	}
	
	function soalbagian3() {
		let url = "dua_besaran_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.duabesaran3.length);
			$("#randomsoal3").html(data.duabesaran3[random].soal3);
			
			$("#inputjawaban3").html(data.duabesaran3[random].jawab3);
		})
	}

	soalbagian3();
	function jwbsoal3(){		
		let a = parseInt($("#jawaban3").val());
		let b = parseInt($("#inputjawaban3").html());
		
		if(a===b){
			$("#output3").html("&#10004");
			$("#output3").css("color","#5688E0");
		}
		else{
			$("#output3").html("&#128473");
			$("#output3").css("color","#FF5347");

		}
	}

	function soalbagian4() {
		let url = "dua_besaran_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.duabesaran4.length);
			$("#randomsoal4").html(data.duabesaran4[random].soal4);
			
			$("#inputjawaban4").html(data.duabesaran4[random].jawab4);
		})
	}

	soalbagian4();
	function jwbsoal4(){		
		let a = parseInt($("#jawaban4").val());
		let b = parseInt($("#inputjawaban4").html());
		
		if(a===b){
			$("#output4").html("&#10004");
			$("#output4").css("color","#5688E0");
		}
		else{
			$("#output4").html("&#128473");
			$("#output4").css("color","#FF5347");

		}
	}


	function soalbagian5() {
		let url = "dua_besaran_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.duabesaran5.length);
			$("#randomsoal5").html(data.duabesaran5[random].soal5);
			
			$("#inputjawaban5").html(data.duabesaran5[random].jawab5);
		})
	}

	soalbagian5();
	function jwbsoal5(){		
		let a = parseInt($("#jawaban5").val());
		let b = parseInt($("#inputjawaban5").html());
		
		if(a===b){
			$("#output5").html("&#10004");
			$("#output5").css("color","#5688E0");
		}
		else{
			$("#output5").html("&#128473");
			$("#output5").css("color","#FF5347");

		}
	}
	
	$("#cekjawaban").on("click", function(){
		jwbsoal1();
		jwbsoal2();
		jwbsoal3();
		jwbsoal4();
		jwbsoal5();				
	})
	
	$("#cobalagi").on("click", function(){
		soalbagian1();
		soalbagian2();
		soalbagian3();
		soalbagian4();
		soalbagian5();		

		$("#jawaban1").val("");
		$("#jawaban2").val("");
		$("#jawaban3").val("");
		$("#jawaban4").val("");		
		$("#jawaban5").val("");

		$("#output1").html("");
		$("#output2").html("");
		$("#output3").html("");
		$("#output4").html("");
		$("#output5").html("");


	})
})
