<template>
	<div class="flex justify-center items-center gap-8 flex-wrap sm:flex-nowwrap max-w-screen-xl mx-auto w-full">
		<div class="w-full">
			<h2 class="about-header">The Exhibition</h2>
			<p class="about-first-text py-4">Luminance brings together over two hundred exceptional pieces from the past three centuries—from rare Art Nouveau brooches to bold contemporary statements.</p>
			<p class="about-second-text">Each piece is displayed in its own light, allowing visitors to appreciate the interplay of metal, stone, and craftsmanship. The exhibition is designed as a meditative walk through time and technique.</p>
		</div>
		<img :src="`${baseURL}images/about.webp`" class="about-image">
	</div>
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL
</script>

<style scoped>
.about-image {
	background-size: cover;
	background-position: center;
	width: 40%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	border: 1px solid #ffffff
}

.about-header {
	font-family: 'PoiretOne';
	font-size: 48px;
}

.about-first-text,
.about-second-text {
	font-size: 16px;
	font-family: 'Raleway';
}

@media (max-width: 640px) {
	.about-image {
		width: 100%;
	}

	.about-header {
		font-size: 24px;
		padding-top: 20px;
	}

	.about-first-text,
	.about-second-text {
		font-size: 14px;
	}
}
</style>