/**
 * @author Domen
 */
function imgSubmit() {
			document.getElementById("inputImage").click();
		}

		var loadFile = function(event) {
			var output = document.getElementById('imgShow');
			output.src = URL.createObjectURL(event.target.files[0]);
			$("#imgShow").css({
				"visibility" : "visible",
				"height" : "100px",
				"width" : "100px",
				"padding" : "2px"
			});

		};
		$(window).scroll(function(event) {
			var scroll = $(window).scrollTop();
			if(scroll.valueOf()>100){
				$("#display").height("+=100");
				$("#main").height("+=100");			
			}
		});