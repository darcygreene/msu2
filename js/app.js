//document.body.innerHTML = `<h1>${d3.version}</h1>`;

var LinearScale = d3.scaleLinear()
	.domain ([0,100])
	.range ([0,1])
	.clamp(true);


	console.log (LinearScale(-20));
	console.log (LinearScale(0));
	console.log (LinearScale(50));
	console.log (LinearScale(100));
	console.log (LinearScale(120));

	console
