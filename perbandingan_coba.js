$(document).ready(function(){

	function soalbagian1() {
		let url = "perbandingan_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.perbandingan1.length);
			$("#randomsoal1").html(data.perbandingan1[random].soal1);
			
			$("#inputjawaban1").html(data.perbandingan1[random].jawab1);
		})
	}

	soalbagian1();

	function jwbsoal1(){		
		let a = parseInt($("#jawaban1").val());
		let b = parseInt($("#inputjawaban1").html());
		
		if(a===b){
			$("#output1").html("<img src='img/benar.svg' style= 'width: 30px;'>");
		}
		else{
			$("#output1").html("<img src='img/salah.svg' style= 'width: 30px;'>");
		}
	}
	
	function soalbagian2() {
		let url = "perbandingan_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.perbandingan2.length);
			$("#randomsoal2").html(data.perbandingan2[random].soal2);
			
			$("#inputjawaban2").html(data.perbandingan2[random].jawab2);
		})
	}

	soalbagian2();
	function jwbsoal2(){		
		let a = parseInt($("#jawaban2").val());
		let b = parseInt($("#inputjawaban2").html());
		
		if(a===b){
			$("#output2").html("<img src='img/benar.svg' style= 'width: 30px;'>");
		}
		else{
			$("#output2").html("<img src='img/salah.svg' style= 'width: 30px;'>");
		}
	}
	
	function soalbagian3() {
		let url = "perbandingan_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.perbandingan3.length);
			$("#randomsoal3").html(data.perbandingan3[random].soal3);
			
			$("#inputjawaban3").html(data.perbandingan3[random].jawab3);
		})
	}

	soalbagian3();
	function jwbsoal3(){		
		let a = parseInt($("#jawaban3").val());
		let b = parseInt($("#inputjawaban3").html());
		
		if(a===b){
			$("#output3").html("<img src='img/benar.svg' style= 'width: 30px;'>");
		}
		else{
			$("#output3").html("<img src='img/salah.svg' style= 'width: 30px;'>");
		}
	}

	function soalbagian4() {
		let url = "perbandingan_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.perbandingan4.length);
			$("#randomsoal4").html(data.perbandingan4[random].soal4);
			
			$("#inputjawaban4").html(data.perbandingan4[random].jawab4);
		})
	}

	soalbagian4();
	function jwbsoal4(){		
		let a = parseInt($("#jawaban4").val());
		let b = parseInt($("#inputjawaban4").html());
		
		if(a===b){
			$("#output4").html("<img src='img/benar.svg' style= 'width: 30px;'>");
		}
		else{
			$("#output4").html("<img src='img/salah.svg' style= 'width: 30px;'>");
		}
	}


	function soalbagian5() {
		let url = "perbandingan_coba.json";
		$.getJSON(url, function(data){
			let random = Math.floor(Math.random()*data.perbandingan5.length);
			$("#randomsoal5").html(data.perbandingan5[random].soal5);
			
			$("#inputjawaban5").html(data.perbandingan5[random].jawab5);
		})
	}

	soalbagian5();
	function jwbsoal5(){		
		let a = parseInt($("#jawaban5").val());
		let b = parseInt($("#inputjawaban5").html());
		
		if(a===b){
			$("#output5").html("<img src='img/benar.svg' style= 'width: 30px;'>");
		}
		else{
			$("#output5").html("<img src='img/salah.svg' style= 'width: 30px;'>");
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