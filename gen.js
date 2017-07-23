'use strict'

const fs = require('fs');
const _ = require('underscore');
const range = 1000;
const name = "multi-selector-classname-classname-diff"

let str = ""
let css = ""
_.range(0, range).map((item) => {
	str += `
<div class="app elm${item}">
	<div class="text1">
		<div>
			<div class="text2">Lorem Ipsum</div>
			<div class="text6 sub1-elm${item}">Lorem Ipsum</div>
		</div>
	</div>
	<div>
		<div>
			<div class="text2">
				Lorem Ipsum
				<div class="text3">
					<div class="text4 test8 sub-elm${item}" id="sub-elm${item}" data-layer="bottom" data-layer-attr>
						Lorem Ipsum
						<div class="text5">Lorem</div>
					</div>
					<p>Lorem Ipsum</p>
				</div>
			</div>
		</div>
	</div>
</div>
`
	css += `
.text4.sub-elm${item} {
	width: 100%;
	height: 50px;
	background-color: #DDD;
	font-size: #333;
	margin-bottom: 20px;
	padding: 5px;
	position: relative;
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
		${str}
		<script type="text/javascript">
			window.onload = function(){
				setTimeout(function(){
				var t = performance.timing;
					alert("Speed of selection is: " + (t.loadEventEnd - t.responseEnd) + " milliseconds");
				}, 0);
			};
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