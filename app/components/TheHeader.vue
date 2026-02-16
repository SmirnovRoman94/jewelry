<template>
	<div class="fixed  w-[100vw] z-10">
		<div class="flex justify-between items-end gap-4 p-4 max-w-screen-xl mx-auto w-full">
			<svg viewBox="0 0 900 100" class="handwriting-svg" :class="{ 'ready': isReady }">
				<text x="10" y="70" class="my_text">
				<!--Ювелирные Традиции России-->
				<a @click="scrollToSection('home', $event)" href="#home">Эксклюзивная выставка - продажа</a>
				</text>
			</svg>
			<nav class="hidden lg:block sm:pb-2">
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

			<div class="block lg:hidden">
				<button @click="showMenu" :class="{ 'opacity-0': isMenu }">
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 7H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M5 12H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M5 17H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>
			
			<div 
  			v-show="isMenu"
  			@click="isMenu = false"
  			class="fixed inset-0  bg-[#0d1322] bg-opacity-80 transition-opacity duration-300 z-40"
			></div>

			<!-- Меню -->
			<div 
			:class="isMenu ? 'translate-x-0' : 'translate-x-full'"
			class="fixed top-0 right-0 w-1/2 h-screen shadow-lg transition-transform duration-300 ease-in-out z-50"
			>
				<div class="p-[20px]">
					<button class="flex justify-end w-full mb-5" @click="isMenu = false">
						<svg
								
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18"
									stroke="#ffffff"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
					</button>

					
					<a 
					v-for="(menu, index) in menuContent"
					:key="index" 
					:style="{ transitionDelay: `${index * 100}ms` }"
					:class="isMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'"
					class="block text-xl p-5 border mb-4 transition-all duration-700 ease-in-out hover:border-[#f1a119]"
					@click="scrollToSection(menu.name, $event)" 
					:href="`#${menu.name}`"
					>
					<span class="my_li">{{ menu.text }}</span>
					</a>
				</div>
			</div>
		</div>
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
		isMenu.value = false;
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
};

const isMenu = ref(false);

function showMenu() {
	isMenu.value = true;
}

const menuContent = [{ name: 'about', text: 'О нас' }, { name: 'collection', text: 'Коллекция' }, { name: 'visit', text: 'Связаться с нами' }];

watchEffect(() => {
	if (!isMenu.value) {
		document.body.style.overflow = '';
	}
	else {
		document.body.style.overflow = 'hidden';
	}
});
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

.my_text {
	font-family: 'Raleway';
	font-size: 35px;
	font-weight: 100;
}
</style>