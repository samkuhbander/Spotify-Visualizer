import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const SongGraph = (props) => {
	const options = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Popularity Score of Songs"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
		},
		data: [{
			type: "stackedBar",
			name: "Score Among Users",
			showInLegend: "true",
			yValueFormatString: "#,##0",
			dataPoints: [
				{ label: props.songs[4].name, y: props.songs[4].popularity },
				{ label: props.songs[3].name, y: props.songs[3].popularity },
				{ label: props.songs[2].name, y: props.songs[2].popularity },
				{ label: props.songs[1].name, y: props.songs[1].popularity },
				{ label: props.songs[0].name, y: props.songs[0].popularity }
			]
		}]
	}

	return (
		<div style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
			<CanvasJSChart options={options}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
}

export default SongGraph;