/**
 * @author Domen
 */
$(document).ready(function() {
	$('#pass1').keypress(function(e) {
		var s = String.fromCharCode(e.which);
		if ((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) || (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)) {
			document.getElementById("pass1").style.backgroundPosition = "center right";
		} else
			document.getElementById("pass1").style.backgroundPosition = "-1000px -1000px";
	});

	$('#formRegister').submit(function() {
		var check1 = colorRed("#name");
		var check2 = colorRed("#surname");
		var check3 = colorRed("#user");
		var check4 = colorRed("#email1");
		var check5 = colorRed("#email2");
		var check6 = colorRed("#pass1");
		var check7 = colorRed("#pass2");
		var check = check1 && check2 && check3 && check4 && check5 && check6 && check7;
		return check;
	});
	
	$("#name,#surname,#user,#email1,#email2,#pass1,#pass2").focusin(function(){
		$(this).css({
			"background-color" : "white",
			"color" : "black"
		});
		
	});

});

function colorRed(string) {
	var el = $(string).val();
	if (!el.length) {
		$(string).css({
			"background-color" : "#fcdede",
			"color" : "red"
		});
		return false;
	} else {
		$(string).css({
			"background-color" : "white",
			"color" : "black"
		});
		return true;
	}
}
