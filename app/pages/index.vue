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

/* Карточка контента */
.content-card {
	display: flex;
	gap: 40px;
	max-width: 1000px;
	background: rgba(255, 255, 255, 0.95);
	padding: 40px;
	border-radius: 20px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(10px);
	align-items: center;
}

.image-side {
	flex: 0 0 400px;
}

.image-side img {
	width: 100%;
	height: 500px;
	object-fit: cover;
	border-radius: 15px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.text-side {
	flex: 1;
	padding: 20px;
}

.text-side h2 {
	font-size: 2.5rem;
	margin-bottom: 20px;
	color: #1a1a2e;
	font-weight: 700;
}

.text-side p {
	font-size: 1.2rem;
	line-height: 1.8;
	color: #333;
}

/* Адаптив */
@media (max-width: 768px) {
	.content-card {
		flex-direction: column;
		gap: 20px;
		padding: 30px;
	}

	.image-side {
		flex: 0 0 auto;
		width: 100%;
	}

	.image-side img {
		height: 300px;
	}

	.text-side h2 {
		font-size: 1.8rem;
	}

	.text-side p {
		font-size: 1rem;
	}
}
</style>