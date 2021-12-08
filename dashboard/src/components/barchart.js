import React, { Component, useState, useEffect } from "react";
import { XYPlot, VerticalBarSeries } from "react-vis";

function Barchart(props) {
  const [plots, setPlots] = useState([]);

  let showTenBars = [];

  useEffect(() => {
    setPlots((prevPlots) =>
      prevPlots.concat({
        x: props.time,
        y: props.queue.length,
      })
    );
  }, [props.time]);

  /*  const [plotsTen, setPlotsTen] = useState([]);
  useEffect(() => {
    setPlotsTen((prevPlotsTen) =>
      for(let i = 0; i<10; i++){
        prevPlotsTen.concat({plots[i]})
      }
    );
  }, [plots]); */

  /*  for (let i = 0; i < 10; i++) {
    showTenBars.concat(plots[i]);
  }

  
 */

  let arrTen = plots.slice(-10, -1);
  console.log();
  return (
    <div className="queue_barchart">
      <XYPlot height={300} width={500} fill="green" barWidth="0.1">
        <VerticalBarSeries style={({ barWidth: 1 }, { strokeWidth: 10 })} data={arrTen} />
      </XYPlot>
    </div>
  );
}
/* 
class Barchart extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    let data = [];

    data.push({
      x: this.props.time,
      y: this.props.queue.length,
    });

    return (
      <div className="queue_barchart">
        <XYPlot height={300} width={300}>
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}
*/
export default Barchart;
