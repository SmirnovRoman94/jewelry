<template>
	<div class="page-container">
		<TheHeader/>
		<main class="scroll-container">
			<slot/>
		</main>
		<TheFooter/>
	</div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';


</script>

<style scoped>
html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
	overflow: hidden;
	/* Важно! */
}

.page-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.scroll-container {
	flex: 1;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	height: 100%;
}
</style>