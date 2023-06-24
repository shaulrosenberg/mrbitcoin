<template>
	<AppHeader />
	<main class="main-content">
		<RouterView />
	</main>
	<AppFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
	components: {
		AppHeader,
		AppFooter,
		RouterView
	}
}
</script>

<style lang="scss"></style>
