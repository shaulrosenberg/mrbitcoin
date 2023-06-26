<template>
    <div class="home">
        <section class="hero-section">
            <h1 v-if="!user">Hello guest</h1>
            <h1 v-else>Welcome to Mr Bitcoin! {{ user.name }}</h1>
            <p>Your reliable source for real-time Bitcoin data.</p>
            <TransactionList v-if="user" :transactions="transactions" />
            <RouterLink v-if="!user" to="/signup">Login</RouterLink>
        </section>
        <section class="features-section">
            <div class="feature">
                <h2>Real-time Prices</h2>
                <p>Track Bitcoin prices in real-time and stay updated on the latest market trends.</p>
            </div>
            <div class="feature">
                <h2>Market Trends</h2>
                <p>Analyze comprehensive market trends and gain insights to make informed decisions.</p>
            </div>
            <div class="feature">
                <h2>Contact Management</h2>
                <p>Manage your contacts easily and efficiently with our built-in contact management system.</p>
            </div>
        </section>
        <section class="home-charts">
            <div class="chart-container">
                <Chart />
            </div>
            <div class="chart-container">
                <LineChart />
            </div>
        </section>
    </div>
</template>
  
<script>
import TransactionList from "@/components/TransactionList.vue"
import Chart from "../components/Chart.vue"
import LineChart from "@/components/LineChart.vue"

export default {
    name: "HomeView",
    components: {
        TransactionList,
        Chart,
        LineChart
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        transactions() {
            return this.user.transactions.slice(0, 3)
        },
    },
}
</script>
  
<style lang="scss" scoped>
.home {
    text-align: center;
    padding: 2rem;
    background-color: #f5f5f5;
    min-height: calc(100vh - 76px);

    .home-charts {
        display: flex;
        justify-content: space-between;
        .chart-container {
            width: 40%;
            padding: 0.5rem;
        }
    }
    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;

        h1 {
            color: #333;
            font-size: 2.5rem;
        }

        p {
            color: #666;
            font-size: 1.2rem;
        }
    }

    .features-section {
        display: flex;
        justify-content: space-around;
        padding: 3rem 0;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;

        .feature {
            max-width: 300px;
        }

        h2 {
            color: #333;
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        p {
            color: #666;
            font-size: 1rem;
        }
    }
}
</style>
  