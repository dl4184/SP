/**
 * @author Domen
 */
$(document).ready(function() {
	$('#formRecover').submit(function() {
		var check1 = emailBlank();
		if (check1)
			alert("You will recieve a new passoword on your email address.");
		return check1;

	});

});

function emailBlank() {
	var email = $("#email").val();
	if (!email.length) {
		$("#email").css({
			"background-color" : "#fcdede",
			"color" : "red"
		});
		return false;
	} else {
		$("#email").css({
			"background-color" : "white",
			"color" : "#black"
		});
		return true;
	}

}

