<template>
	<section id="home" class="fullpage-section">
		<div class="main-slider">
			<BeansSlider />
		</div>
	</section>
    
	<section id="about" class="fullpage-section">
		<About />
	</section>
	<section id="collection" class="fullpage-section">
		<Collection/>
	</section>
	<section id="visit" class="fullpage-section">
		<Visit/>
	</section>
</template>

<script setup>
definePageMeta({
	layout: 'default'
});

</script>

<style scoped>
.fullpage-section {
	scroll-snap-align: start;
	scroll-snap-stop: always;
	height: calc(100vh - 150px);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1280px;
	margin: 0 auto;
}

.main-slider {
	width: 70%;
	margin: 0 auto;
}
</style>