<template>
    <div>
      <div v-if="isLoading">Loading chart...</div>
      <div v-else-if="error">{{ error }}</div>
      <Bar v-else :data="chartData" :options="chartOptions" />
    </div>
  </template>
    
  <script>
  import { Bar } from 'vue-chartjs'
  import { bitcoinService } from '@/services/bitcoin.service'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
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
  