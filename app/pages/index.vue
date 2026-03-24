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

useHead({
	title: 'Ювелирные Традиции России',
	meta: [
		{
			name: 'description',
			content: 'Эксклюзивная выставка-продажа. Вас ожидает богатая история русского ювелирного исскуства! Широкий ассортимент, личное общение с авторами и атмосфера истории',
		}
	],
});

useSeoMeta({
	title: 'Ювелирные Традиции России',
	ogTitle: 'Ювелирные Традиции России',
	description: 'Эксклюзивная выставка-продажа. Вас ожидает богатая история русского ювелирного исскуства! Широкий ассортимент, личное общение с авторами и атмосфера истории',
	ogDescription: 'Эксклюзивная выставка-продажа. Вас ожидает богатая история русского ювелирного исскуства! Широкий ассортимент, личное общение с авторами и атмосфера истории',
	//ogImage: 'http://utrexpo.ru/about.webp',
	//ogUrl: 'http://utrexpo.ru',
	ogImage: 'http://w904642y.beget.tech/images/about.webp',
	ogUrl: 'http://w904642y.beget.tech',
	ogType: 'website',
})
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