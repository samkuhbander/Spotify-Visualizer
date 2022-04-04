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
				text: "Popularity Score of Arists"
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
				name: "Artist popularity score",
				showInLegend: "true",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 5, label: "Sam Fender", y: 86 },
					{ x: 4, label: "Kanye West", y: 95 },
					{ x: 3, label: "Morgan Wallen", y: 71 },
					{ x: 2, label: "Holly Humberstone", y: 58 },
					{ x: 1, label: "Juice Wrld", y: 60 },
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