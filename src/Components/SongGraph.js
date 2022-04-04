import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class StackedBarChart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Popularity Score of Songs"
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
			},
			data: [
			{
				type: "stackedBar",
				name: "Song popularity score",
				showInLegend: "true",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 5, label: "Broadway Girls (feat. Morgan Wallen)", y: 84 },
					{ x: 4, label: "The Walls Are Way Too Thin", y: 67 },
					{ x: 3, label: "Hypersonic Missiles", y: 71 },
					{ x: 2, label: "Jump Around", y: 79 },
					{ x: 1, label: "Scarlett", y: 66 },
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default StackedBarChart;