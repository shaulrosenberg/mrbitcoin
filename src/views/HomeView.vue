<template>
	<div class="home">
		<h1>Welcome to Mr Bitcoin!</h1>
		<p>This application provides real-time data on bitcoin prices, market trends, and more.</p>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 5rem); // considering header and footer heights
	text-align: center;
	padding: 2rem;
	background-color: #f5f5f5;

	h1 {
		color: #333;
		font-size: 2.5rem;
	}

	p {
		color: #666;
		font-size: 1.2rem;
	}
}
</style>
