document.addEventListener("DOMContentLoaded", function () {

	/* Many thanks to Dan Wahlin's great tutorial at https://weblogs.asp.net/dwahlin/creating-a-line-chart-using-the-html-5-canvas */
	var dataDef = {
		title: "Canada Population Chart",
		xLabel: "Year",
		yLabel: "Population (Millions)",
		labelFont: "19pt Tahoma",
		dataPointFont: "10pt Helvetica",
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
			{ x: '2000', y: 30.7 },
			{ x: '2010', y: 34.1 },
			{ x: '2020', y: 37.6 }
		]
	}
	CanvasChart.render('popChart', dataDef);
});