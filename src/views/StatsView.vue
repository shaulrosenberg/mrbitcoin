<template>
    <section class="statistics">
        <h1>Stats</h1>
        <Chart />
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
    padding: 10px;
}

</style>