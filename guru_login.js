function login() {
	var a=0;	
	var username=document.getElementById('username').value;
	username=username.toLowerCase();
	var password=document.getElementById('password').value;
	password=password.toLowerCase();

	if (username=="user" && password=="12345"){
		window.location="nilai_evaluasi.html"
	}
	else 
	if (a==0) 
		{ alert("Gagal login! Coba lagi!"); 
	}
}