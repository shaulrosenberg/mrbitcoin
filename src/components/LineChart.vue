<template>
    <div>
      <div v-if="isLoading">Loading chart...</div>
      <div v-else-if="error">{{ error }}</div>
      <Line v-else :data="chartData" :options="chartOptions" />
    </div>
  </template>
      
  <script>
  import { Line } from 'vue-chartjs'
  import { bitcoinService } from '@/services/bitcoin.service'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
  
  export default {
    name: 'LineChart',
    components: { Line },
    data() {
      return {
        isLoading: true,
        error: null,
        chartData: null,
        chartOptions: {
          responsive: true,
          legend: {
            display: true,
          }
        }
      }
    },
    async mounted() {
      try {
        const marketPriceHistory = await bitcoinService.getMarketPriceHistory()
        const labels = marketPriceHistory.values.map(v => new Date(v.x * 1000).toLocaleDateString())
        const data = marketPriceHistory.values.map(v => v.y)
  
        this.chartData = {
          labels,
          datasets: [
            {
              label: 'Market Price History',
              data,
              backgroundColor: '#3498db',
              fill: false,
              borderColor: '#3498db',
              tension: 0.1
            }
          ]
        }
  
        this.isLoading = false
      } catch (error) {
        console.error("Error getting data for chart", error)
        this.error = 'An error occurred while fetching data.'
        this.isLoading = false
      }
    }
  }
  </script>
  