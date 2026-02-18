<template>
  <div class="content-wrapper">
	  <section id="home" class="page">
		<div class="main-slider">
			<BeansSlider />
		</div>
		</section>
		
		<section id="about" class="page">
			<About />
		</section>
		<section id="collection" class="page">
			<Collection/>
		</section>
		<section id="visit" class="page">
			<Visit/>
		</section>
    </div>
</template>

<script setup>
definePageMeta({
	layout: 'default'
});

</script>

<style scoped>
/* Контент поверх фона */
.content-wrapper {
	position: relative;
	z-index: 2;
	/* УДАЛЕНЫ height и overflow-y - теперь скролл на window */
}

.page {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 20px;
	scroll-snap-align: start;
	scroll-snap-stop: always;

	/* Изменено на start*/
}
</style>