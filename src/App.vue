<template>
	<AppHeader />
	<UserMsg />
	<main class="main-content">
		<RouterView />
	</main>
	<AppFooter />
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import UserMsg from './components/UserMsg.vue'

export default {
	components: {
		AppHeader,
		AppFooter,
		RouterView,
		UserMsg
	}
}
</script>

<style lang="scss"></style>
