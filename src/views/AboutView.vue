<template>
	<div class="about">
		<h1>About Us</h1>
		<p>We are a dedicated team of developers committed to bringing you the most up-to-date Bitcoin statistics.</p>
	</div>
</template>

<script>
export default {
	name: 'AboutView',
}
</script>

<style lang="scss" scoped>
.about {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 76px); // considering header and footer heights
	text-align: center;
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
