import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class Chart extends Component {
    render() {
      let resumeData = this.props.resumeData;
      const mySkills = {
        chart: {
            captionFontSize: "24",
            yAxisName: "Level",
            baseFontSize: "14",
            yAxisMaxValue: "10",
            yAxisMinValue: "0",
            theme: "fusion"
        },
        data: resumeData.skills
    };
    
    const chartConfigs = {
        id: "chart",
        renderAt: "chart-container",
        type: "column2d",
        width:925,
        height: 600,
        dataFormat: "json",
        dataSource: mySkills,
    };
        return(
            <div id="chart-container">
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}

export default Chart;