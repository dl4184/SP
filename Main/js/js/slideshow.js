var text=["Find new adventures ...","Discover...","Meet new people...","Find yourself...","Hang out with friends...","Enjoy every moment!"];
var koordinate=[[0.1,0.9],
[0.1,0.9],
[0.1,0.9],
[0.1,0.9],
[0.1,0.9],
[0.1,0.9]
];

/*
 font-size: 48px;
    color: #fff;  
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
 */
$(document).ready(function() {

	var canvas,
	    ctx;
	var aImages = [];
	var iImg = 0;
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	window.onload = function() {
		$('.slides').children().each(function(i) {
			var oImg = new Image();
			oImg.src = this.src;
			aImages.push(oImg);

		});
		document.getElementById("r"+iImg).checked = true;
		ctx.drawImage(aImages[iImg], 0, 0, aImages[iImg].width, aImages[iImg].height, 0, 0, canvas.width, canvas.height);
		ctx.font = "45px Arial";
		ctx.fillStyle = "white";
		ctx.shadowColor = "black";
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.fillText(text[iImg], koordinate[iImg][0] * canvas.width, koordinate[iImg][1] * canvas.height);
		}

	$(function() {

		setInterval(function() {
			
			iImg++;
			if (iImg == $(aImages).length)
				iImg = 0;
			
			$('#canvas').fadeOut(500, function() {
				document.getElementById("r"+iImg).checked = true;
				ctx.drawImage(aImages[iImg], 0, 0, aImages[iImg].width, aImages[iImg].height, 0, 0, canvas.width, canvas.height);
				ctx.font = "45px Arial";ctx.fillStyle="white";
				ctx.shadowColor = "black";
				ctx.shadowOffsetX = 2; 
				ctx.shadowOffsetY = 2; 
				ctx.fillText(text[iImg],koordinate[iImg][0]*canvas.width,koordinate[iImg][1]*canvas.height);
				$('#canvas').fadeIn(500);
			}); 
			
			
		}, 5000);

	});
	
	$("#r0,#r1, #r2, #r3,#r4,#r5").change(function () {
			    iImg=$('input[name=radio]:checked').index('input[name=radio]')
				ctx.drawImage(aImages[iImg], 0, 0, aImages[iImg].width, aImages[iImg].height, 0, 0, canvas.width, canvas.height);
				ctx.font = "45px Arial";ctx.fillStyle="white";
				ctx.shadowColor = "black";
				ctx.shadowOffsetX = 2; 
				ctx.shadowOffsetY = 2; 
				ctx.fillText(text[iImg],koordinate[iImg][0]*canvas.width,koordinate[iImg][1]*canvas.height);
	});
});

