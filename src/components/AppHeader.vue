<template>
    <header>
        <nav>
            <div class="nav-logo">
                <RouterLink to="/">
                    <!-- <img src="@/assets/img/logo.png" /> -->
                    MrBitcoin
                </RouterLink>
            </div>
            <div class="nav-links">
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/stats">Statistics</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink v-if="!user" to="/signup" class="auth-link">Login</RouterLink>
                <RouterLink to="/" v-if="user" @click="logout" class="auth-link">Logout</RouterLink>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background: linear-gradient(90deg, #222 0%, #555 100%);
    color: #fff;
    padding: 1rem 0.67rem;
    box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.2);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    width: 4rem;

    img {
        width: 100%;
        object-fit: cover;
        
    }
}

.nav-links {
    display: flex;
    align-items: center;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #f9d342;
    }
}

.auth-link {
    margin-left: 1.33rem;
    padding: 0.67rem 1rem;
    border-radius: 0.33rem;
    background-color: #f9d342;
    color: #333;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #fff;
        color: #222;
    }
}
</style>
