<template>
	<div class="about">
		<div class="header-section">
			<h1>About Us</h1>
			<p>We are a dedicated team of developers committed to bringing you the most up-to-date Bitcoin statistics.</p>
		</div>
		<div class="team-section">
			<h2>Our Team</h2>
			<p>Meet the brilliant minds behind this project.</p>
			<div class="team-members">
				<div class="team-member" v-for="member in teamMembers" :key="member.name">
					<img :src="member.avatarUrl" alt="Avatar" class="avatar">
					<h3>{{ member.name }}</h3>
					<p>{{ member.role }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutView',
	data() {
		return {
			teamMembers: [
				{ name: 'Shaul Rosenberg', role: 'Lead Developer', avatarUrl: 'https://avatars.dicebear.com/api/human/john.svg' },
				{ name: 'Jane Doe', role: 'UI/UX Designer', avatarUrl: 'https://avatars.dicebear.com/api/human/jane.svg' },
				// Add more team members as needed
			]
		};
	}
}
</script>

<style lang="scss" scoped>
.about {
	background-color: #f5f5f5;
	padding: 2em;
	min-height: calc(100vh - 76px);
	.header-section, .team-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block-end: 4em;
		h1 {
			color: #333;
			margin-block-start: 2rem;
		}
		h2 {
			color: #333;
		}
		p {
			color: #666;
			font-size: 1.2rem;
		}
	}
	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 2rem;
	}
	.team-members {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2em;
		margin-top: 2em;
		.team-member {
			width: 200px;
			text-align: center;
			h3 {
				color: #333;
				font-size: 1.5rem;
			}
			p {
				color: #666;
				font-size: 1.2rem;
			}
			.avatar {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				object-fit: cover;
				margin-bottom: 1em;
			}
		}
	}
}
</style>
