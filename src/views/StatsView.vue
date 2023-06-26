<template>
    <section class="statistics">
        <div class="header-section">
            <h1>Stats</h1>
            <p>
                Check out the latest Bitcoin statistics. Refreshed every hour, get the most accurate 
                and up-to-date data here.
            </p>
        </div>
        <Chart />
        <div class="footer-section">
            <p>
                Note: All data are sourced from certified cryptocurrency market data providers. 
                For any inquiries or issues, please <RouterLink to="/contact">Contact Us</RouterLink>.
            </p>
        </div>
    </section>
</template>

<script>
import Chart from '../components/Chart.vue'
    export default {
        components: {
            Chart
        }
    }
</script>

<style lang="scss">

.statistics {
    padding: 2em;
    background-color: #f5f5f5;
    text-align: center;

    .header-section, 
    .footer-section {
        margin-bottom: 2em;

        h1 {
            font-size: 2.5rem;
            color: #333;
        }

        p {
            font-size: 1.2rem;
            color: #666;
        }
    }
}

</style>
