<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/stats">Statistics</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    }
}
</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}
</style>
