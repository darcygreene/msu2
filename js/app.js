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

	

	var timeScale = d3.scaleTime ()
		.domain([new Date(2016,0,1), new Date ()])
		.range ([0,100]);

		console.log (timeScale(new Date (2016, 6, 4)));
		console.log(timeScale.invert(50));

		//January is 0
