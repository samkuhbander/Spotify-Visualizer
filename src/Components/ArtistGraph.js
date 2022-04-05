import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ArtistGraph = (props) => {
	const options = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Popularity Score of Artists"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
		},
		data: [{
			type: "stackedBar",
			name: "Artist popularity score",
			showInLegend: "true",
			yValueFormatString: "#,##0",
			dataPoints: [
				{ label: props.artists[4].name, y: props.artists[4].popularity },
				{ label: props.artists[3].name, y: props.artists[3].popularity },
				{ label: props.artists[2].name, y: props.artists[2].popularity },
				{ label: props.artists[1].name, y: props.artists[1].popularity },
				{ label: props.artists[0].name, y: props.artists[0].popularity }
			]
		}]
	}

	return (
		<div>
			<CanvasJSChart options={options}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
}

export default ArtistGraph;





// class StackedBarChart extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			theme: "light2",
// 			title:{
// 				text: "Popularity Score of Artists"
// 			},
// 			toolTip: {
// 				shared: true
// 			},
// 			legend:{
// 				cursor: "pointer",
// 			},
// 			data: [{
// 				type: "stackedBar",
// 				name: "Artist popularity score",
// 				showInLegend: "true",
// 				yValueFormatString: "#,##0",
// 				dataPoints: [
// 					{ label: "Artist 1", y: 20},
// 				]
// 			}]
// 		}
// 		return (
// 			<div>
// 				<CanvasJSChart options = {options}	
// 					onRef={ref => this.chart = ref} 
// 				/>
// 				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 			</div>
// 		);
// 	}
// }

// export default StackedBarChart;
