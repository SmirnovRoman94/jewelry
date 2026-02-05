<template>
	<div class="flex justify-between items-center gap-4 p-4 max-w-screen-xl mx-auto w-full">
		<svg viewBox="0 0 600 100" class="handwriting-svg" :class="{ 'ready': isReady }">
			<text x="10" y="70" font-family="Raleway" font-size="35" font-weight="100">
			<!--Ювелирные Традиции России-->
			<a @click="scrollToSection('home', $event)" href="#home">Эксклюзивная выставка - продажа</a>
			</text>
		</svg>
		<nav class="pt-7">
			<ul class="flex gap-4">
				<li class="my_li">
					<a @click="scrollToSection('about', $event)" href="#about">О нас</a>
				</li>
				<li class="my_li">
					<a @click="scrollToSection('collection', $event)" href="#collection">Коллекция</a>
				</li>
				<li class="my_li">
					<a @click="scrollToSection('visit', $event)" href="#visit">Связаться с нами</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
const isReady = ref(false)

onMounted(() => {
	// Небольшая задержка для применения стилей
	setTimeout(() => {
		isReady.value = true
	}, 100)
})

const scrollToSection = (id, event) => {
	event.preventDefault();
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
};
</script>

<style scoped>
/*.logo {
	font-family: 'GreatVibes', sans-serif;
	font-size: 40px;
}*/

.handwriting-svg {
	width: 50%;
	height: auto;
}

.handwriting-svg text {
	fill: none;
	stroke: #d7d6d6;
	stroke-width: 1;
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	color: #d7d6d6;
}

/* Анимация запускается только после добавления класса ready */
.handwriting-svg.ready text {
	animation: draw 5s ease-in-out forwards;
}

@keyframes draw {
	to {
		stroke-dashoffset: 0;
		fill: #f5f0e8;
	}
}

.my_li {
	font-family: 'Raleway';
	color: #d7d6d6;
	cursor: pointer;
	transition: color 0.2s;
	text-transform: uppercase;
}

.my_li:hover {
	color: #ffffff;
}
</style>