
<script>

export let queryData, type, wdth, hgth, index;
import {onMount} from 'svelte';
import ApexCharts from "apexcharts"
import {Block} from "framework7-svelte";


let points = [];



onMount(()=> {
  queryData[type].forEach(element => {
    
    let time = element.time.replace("T00:00:00+00:00", "");
    points.push({x: time, y: element.closing_price})
    
  });
  
  let options = {
          series: [{
          data: points
        }],
          chart: {
          type: 'line',
          height: hgth,
          width: wdth,
          toolbar:{
              show:false
          }
        },
          legend:{
              show:false
          },
        xaxis: {
          floating: true,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: false
            },
        },
        yaxis: {
            floating: true,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: false
            },
        },
        grid: {
            show:false,
            padding: {
                left: 0,
                right: 0,
                top:-20,
            bottom:0
            }
        },
        stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1,
    dashArray: 0,      
}
    };
    
    let chart = new ApexCharts(document.querySelector('#line-chart' + index), options);
    chart.render()
  }
)


</script>

<div id="line-chart{index}" style="margin:none; "></div>