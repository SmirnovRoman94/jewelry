<template>
	<div class="parallax-container">
		<!-- Фоновый слой -->
		<div class="background-layer">
      		<div class="bg-gradient" :style="{ transform: `translateY(${bgOffset}px)` }"></div>
    	</div>

		<TheHeader/>
		<main>
			<slot/>
		</main>
		<TheFooter/>
	</div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

const bgOffset = ref(0);

function handleScroll() {
	const scrollY = window.scrollY;
	bgOffset.value = -scrollY * 0.3;
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})
onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
})
</script>

<style>
/* Глобальные стили для scroll-snap */
html {
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
}

body {
	margin: 0;
	padding: 0;
}
</style>

<style scoped>
.parallax-container {
	position: relative;
	width: 100%;
	min-height: 100vh;
}

/* Фоновый слой */
.background-layer {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 0;
	overflow: hidden;
	/* ВАЖНО! */
}

.bg-gradient {
	width: 100%;
	height: 300vh;
	background-image: url('./images/back.webp');
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	will-change: transform;
}

/*html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
	overflow: hidden;
}*/

/*
.page-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
}*/

/*.scroll-container {
	flex: 1;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	height: 100%;
}*/
</style>