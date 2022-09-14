<template>
<div id="barChart"></div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      chartData: []
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      let myChart = this.$echarts.init(document.querySelector("#barChart"));
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
#barChart {
  height: 300px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}
</style>