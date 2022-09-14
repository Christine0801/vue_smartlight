<template>
<div id="myLineChart"></div>
</template>

<script>
import {getData} from "@/network/data";

export default {
  name: "LineChart",
  data() {
    return {
      chartData: {
        Email: [120, 50, 12, 134, 90, 230, 210],
        UnionAds: [220, 182, 191, 234, 290, 330, 310],
        VideoAds: [150, 232, 201, 154, 190, 330, 410],
        Direct: [320, 332, 301, 334, 390, 330, 320],
        SearchEngine: [100, 20, 901, 200, 260, 100, 400]
      }
    }
  },
  created() {

  },
  mounted() {
    getData().then(({data}) => {
      if (data.code === 200)
        this.chartData = data.data
      this.initChart()
    }).catch(({response}) => {
      console.log("error")
    })
  },
  methods: {
    initChart() {
      let option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: this.chartData.Email
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: this.chartData.UnionAds
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: this.chartData.VideoAds
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: this.chartData.Direct
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: this.chartData.SearchEngine
          }
        ]
      };
      let myChart = this.$echarts.init(document.querySelector("#myLineChart"));
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
#myLineChart {
  height: 200px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  margin-bottom: 10px;
}
</style>