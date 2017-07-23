'use strict'

const fs = require('fs');
const _ = require('underscore');
const range = 1000;
const name = "inline"

let str = ""
let css = ""
_.range(0, range).map((item) => {
	str += `
<div class="box elm${item}">
	box
</div>
`
})

css += `
.box-container {
	width: 100%;
	display: block;
	overflow: auto;
}
.box-container .box {
	width: 25%;
	display: inline-block;
	height: 100px;
	background-color: #DDD;
	border: 1px solid #FFF;
}
.box-container .box.resize {
	width: 50%;
	height: 120px;
	background-color: #DDD;
	border: 1px solid #FFF;
}
	`

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