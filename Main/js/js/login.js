/**
 * @author Domen
 */

$(document).ready(function() {
	$('#pass').keypress(function(e) {
		var s = String.fromCharCode(e.which);
		if ((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) || (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)) {
			document.getElementById("pass").style.backgroundPosition = "center right";
		} else
			document.getElementById("pass").style.backgroundPosition = "-1000px -1000px";
	});

	$('#formLogin').submit(function() {
		var user = $("#user").val();
		var pass = $("#pass").val();
		var check = true;
		if (!pass.length) {
			document.getElementById("pass").style.backgroundColor = "#fcdede";
			$("#pass").css({
				"color" : "red"
			});
			check = false;
		} else {
			document.getElementById("pass").style.backgroundColor = "white";
			$("#pass").css({
				"color" : "#black"
			});
		}
		if (!user.length) {
			document.getElementById("user").style.backgroundColor = "#fcdede";
			$("#user").css({
				"color" : "red"
			});
			check = false;
		} else {
			document.getElementById("user").style.backgroundColor = "white";
			$("#user").css({
				"color" : "#black"
			});
		}
		console.log(check);
		if(check){
			var url=window.location.href;
			var last=url.lastIndexOf('/');
			var sub=url.substring(0,last);
			window.location.href = sub+'/home.html';
			return false;
		}
		return check;

	});
	
	$("#user,#pass").focusin(function(){
		$(this).css({
			"background-color" : "white",
			"color" : "black"
		});
		
	});
	
	

});

