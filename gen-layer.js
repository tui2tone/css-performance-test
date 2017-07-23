'use strict'

const fs = require('fs');
const _ = require('underscore');
const range = 100;
const name = "layer"

let str = ""
let css = ""
_.range(0, range).map((item) => {
	str += `
<div class="box elm${item}">
	box
</div>
`


css += `
.box-container {
}
.box-container .box.elm${item} {
	position: fixed;
	z-index: ${item};
	width: 100px;
	height: 100px;
	background-color: #FF0000;
	left: ${item * 2 + 30}px; 
	top: ${item * 2 + 30}px; 
	transition: all 1s ease;
	opacity: 0.3;
}
.box-container .box.resize {
	width: 200px;
	height: 200px;

}
	`

})

const html = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Css Performance Test</title>
		<link rel="stylesheet" href="${name}-${range}.css">
	</head>
	<body>
		<button onClick="toggleBoxAnimation()">Toggle</button>
		<div class='box-container'>
			${str}
		</div>
	
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript" charset="utf-8" async defer></script>
		<script type="text/javascript">
			function toggleBoxAnimation() {
				$(".box").toggleClass("resize")
			}
		</script>
	</body>
	</html>
`

fs.writeFile(`test/${name}-${range}.html`, html, function(err) {
	if(err) {
			return console.log(err);
	}

	console.log("The file html saved!");
}); 

fs.writeFile(`test/${name}-${range}.css`, css, function(err) {
	if(err) {
			return console.log(err);
	}

	console.log("The file css saved!");
}); 