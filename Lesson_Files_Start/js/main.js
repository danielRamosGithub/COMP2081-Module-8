// STEP 3: Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {

	// STEP 4: Get canvas and set context to 2d
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	// STEP 5: Draw line
	context.moveTo(100, 150);
	context.lineTo(450, 50);
	context.strokeStyle = "#ff0000";
	context.lineWidth = 15;
	context.lineCap = "round";
	context.stroke();
	// STEP 6: Draw rectangle
	var topLeftCornerX = 180;
	var topLeftCornerY = 190;
	var width = 200;
	var height = 100;
	context.beginPath();
	context.rect(topLeftCornerX, topLeftCornerY, width, height);
	// STEP 7: Fill and outline rectangle
	context.fillStyle = "limegreen";
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = "green";
	context.stroke();
	// STEP 8: Draw circle
	var centerX = 420;
	var centerY = 120;
	var radius = 35;
	context.beginPath();
	// arc(x, y, r, [length in radians], counterclockwise?)
	// https://www.mathsisfun.com/geometry/radians.html
	context.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
	// STEP 9: Fill and outline circle
	context.fillStyle = "#FC0";
	context.fill();
	//  STEP 10: Draw arc
	var centerX = 280;
	var centerY = 160;
	var radius = 50; 
	// To go from degrees to radians: multiply by π, divide by 180
	var startAngle = 270 * Math.PI / 180;
	var endAngle = 90 * Math.PI / 180;
	context.beginPath();
	context.arc(centerX, centerY, radius, startAngle, endAngle, false);
	context.lineWidth = 15;
	context.strokeStyle = "orange";
	context.stroke();
	// STEP 11: Draw a gradient
	var gradient = context.createLinearGradient(0, 0, 200, 0);
	gradient.addColorStop(0, "blue");
	gradient.addColorStop(1, "white");
	context.fillStyle = gradient;
	context.fillRect(10, 10, 200, 100);
	// STEP 12: Draw a triangle
	context.beginPath();
	// starting point
	context.moveTo(75, 125);
	// move down and right
	context.lineTo(150, 200);
	// move up
	context.lineTo(150, 50);
	// fill the shape in
	context.fillStyle = "rgba(200,0,220,0.75)";
	context.fill();
	// Head back to index.html for the next STEP

	// STEP 15: Build out the data object
	/* Many thanks to Dan Wahlin's great tutorial at https://weblogs.asp.net/dwahlin/creating-a-line-chart-using-the-html-5-canvas */
	var dataDef = {
		title: "Canada Population Chart",
		xLabel: "Year",
		yLabel: "Population (Millions)",
		labelFont: "19pt Arial",
		dataPointFont: "10pt Arial",
		renderTypes: [CanvasChart.renderType.lines, CanvasChart.renderType.points],
		dataPoints: [
			{ x: '1900', y: 5.3 },
			{ x: '1910', y: 7.0 },
			{ x: '1920', y: 8.6 },
			{ x: '1930', y: 10.2 },
			{ x: '1940', y: 11.4 },
			{ x: '1950', y: 13.7 },
			{ x: '1960', y: 17.9 },
			{ x: '1970', y: 21.3 },
			{ x: '1980', y: 24.5 },
			{ x: '1990', y: 27.8 },
			{ x: '2000', y: 30.7 }
		]
	}
	/* STEP 16: Render the chart on the canvas element - all done! */
	CanvasChart.render('popChart', dataDef);
});