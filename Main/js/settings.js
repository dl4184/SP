/**
 * @author Domen
 */

function imgSubmit() {
			document.getElementById("inputImage").click();
		}
		
var loadFile = function(event) {
			var output = document.getElementById('newprofile');
			output.src = URL.createObjectURL(event.target.files[0]);
		};
		
function buttonClick(){
	var url=window.location.href;
	var last=url.lastIndexOf('/');
	var sub=url.substring(0,last);
	window.location.href = sub+'/home.html';
	
}
	/*var noerror=false;
	var name= $('#name');
	var letters=/^[a-zA-Z]+$/;
	if(name.val().length>0){
			if(!letters.test(name.val())){
				console.log("Enter only letters from A-Z in your name.")
				noerror=false;
			}
		}
	name= $('#surname');	
	if(name.val().length>0){
			if(!letters.test(name.val())){
				console.log("Enter only letters from A-Z in your surname.")
				noerror=false;
			}
		}
	 name= $('#email');
	 var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	 if(name.val().length>0){
	 	
	 }
	
}*/
