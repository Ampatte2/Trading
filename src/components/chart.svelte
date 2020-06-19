
<script>

export let queryData, money, type, wdth, hgth;
import {onMount} from 'svelte';
import ApexCharts from "apexcharts"
import {Block} from "framework7-svelte";


let points = [];

console.log(queryData)

onMount(()=> {
  queryData[type].forEach(element => {
    let ohlc = [element.opening_price, element.highest_price, element.lowest_price, element.closing_price];
    let time = element.time.replace("T00:00:00+00:00", "");
    points.push({x: time, y: ohlc})
  });
  let options = {
          series: [{
          name: money,
          data: points
        }],
          chart: {
          type: 'candlestick',
          height: hgth,
          width: wdth
        },
        title: {
          text: `${type} ${money}`,
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        },
        animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
        },
        zoom: {
        enabled: true,
        type: 'x',
        resetIcon: {
            offsetX: -10,
            offsetY: 0,
            fillColor: '#fff',
            strokeColor: '#37474F'
        },
        selection: {
            background: '#90CAF9',
            border: '#0D47A1'
        }    
        },
        plotOptions: {
        candlestick: {
            colors: {
            upward: '#3C90EB',
            downward: '#DF7D46'
            }
        }
        }
    };
    
    let chart = new ApexCharts(document.querySelector('#candle-chart'), options);
    chart.render()
  }
)


</script>
<Block>
<div id="candle-chart"></div>
</Block>
<style>
#candle-chart {
  max-width: 50vw;
  margin: auto;
}

</style>