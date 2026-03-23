<template>
	<div class="w-full mx-auto max-w-screen-xl">
		<div class="flex justify-center items-center gap-8 flex-wrap sm:flex-nowwrap max-w-screen-xl mx-auto w-full">
			<div class="w-full">
				<h2 class="about-header">О нас</h2>
				<p class="about-first-text py-4">Добро пожаловать на раздел выставки-продажи «Ювелирные Традиции России» — уникальное событие, где оживает богатая история русского ювелирного искусства! 
					Это уже вторая традиционная выставка, которая собирает на одной площадке мастеров со всех уголков нашей Родины и ближнего зарубежья. 
					От изысканных техник Фаберже до передовых современных технологий — здесь каждый найдёт вдохновение и возможность приобрести эксклюзивные украшения.</p>
				<p class="about-second-text pb-1">
					Что вас ждёт?
				</p>	
				<ul class="list-disc pl-5">
					<li class="about-second-text">Широкий ассортимент: сотни уникальных изделий на любой вкус — от антикварных шедевров до новинок с использованием 3D-печати и инновационных материалов. Всё можно приобрести на самой выставке по выгодным ценам</li>
					<li class="about-second-text">Личное общение с авторами: соговорите с ювелирами напрямую, узнайте секреты их мастерства, закажите персонализированные работы</li>
					<li class="about-second-text">Атмосфера истории: выставка проходит в Музее связи имени А.С. Попова — идеальном зале с историческим шармом, специально предназначенном для таких событий. Это добавляет магии каждому экспонату!</li>
				</ul>
				<p class="about-second-text pt-2">Не упустите шанс погрузиться в мир ювелирного наследия и поддержать российских мастеров. Приходите, чтобы приобрести, узнать и вдохновиться!</p>
			</div>
			<img :src="`${baseURL}images/about.webp`" class="about-image">
		</div>
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