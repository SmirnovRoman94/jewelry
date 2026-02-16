<template>
  <div class="beans-slider">
    <div class="my_border">
		<div class="flex w-full justify-between px-[15px] absolute">
			<div class="w-[15%] p-[20px]">
				<Hohloma/>
			</div>
			<div class="w-[15%] p-[20px]">
				<Hohloma/>
			</div>
		</div>
		<h1 class="slider-heading" :class="{ 'is-visible': isVisible }">Ювелирные Традиции России</h1>
		<div class="img-holder">
			<img :src="`${baseURL}images/girl.webp`" alt="image description">
		</div>
		<div class="flex w-full justify-between px-[15px] absolute bottom-0">
			<div class="w-[20%]">
				<Hohloma/>
			</div>
			<div class="w-[20%]">
				<Hohloma/>
			</div>
		</div>
    </div>
  </div>
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL

const isVisible = ref(false);

onMounted(() => {
	setTimeout(() => {
		isVisible.value = true;
	}, 100);
})
</script>

<style scoped>
.beans-slider {
	position: relative;
	padding: 50px 0;
}

.my_border {
	display: block;
	position: relative;
	z-index: 1;
}

.slider-heading {
	font-size: 80px;
	/*line-height: 170px;*/
	letter-spacing: 9px;
	text-align: center;
	margin: 0;
	opacity: 0;
	transform: scale(0.5);
	transition: all 0.6s ease 0.4s;
	font-family: 'PoiretOne';
	font-weight: 700;
	padding: 0 48px;
}

.slider-heading.is-visible {
	opacity: 1;
	transform: scale(1);
}

.img-holder {
	width: 440px;
	margin: -15px auto 0;
	position: relative;
	z-index: 3;
	opacity: 0;
	transform: translateY(100px);
	animation: slideUp 0.8s ease-out 1.8s forwards;
}

.img-holder img {
	width: 100%;
	height: auto;
	display: block;
}

/* Верхняя граница - опускается сверху */
.my_border:before {
	content: '';
	position: absolute;
	left: 24px;
	right: 28px;
	top: 0;
	padding: 60px 0;
	border: 14px solid currentColor;
	border-bottom: none;
	z-index: 2;
	opacity: 0;
	transform: translateY(-100%);
	animation: slideDown 0.6s ease-out 0.6s forwards;
}

/* Нижняя граница - поднимается снизу */
.my_border:after {
	content: '';
	position: absolute;
	left: 24px;
	right: 28px;
	bottom: 0px;
	padding: 260px 0;
	border: 14px solid currentColor;
	border-top: none;
	z-index: 2;
	opacity: 0;
	transform: translateY(100%);
	animation: slideUp 0.6s ease-out 1.2s forwards;
}

/* Анимации */
@keyframes fadeIn {
	to {
		opacity: 1;
	}
}

@keyframes slideDown {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slideUp {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Адаптив */
@media (max-width: 768px) {
	.slider-heading {
		font-size: 40px;
		line-height: 50px;
		letter-spacing: 4px;
	}

	.img-holder {
		width: 90%;
		max-width: 440px;
		margin-top: -80px;
	}
}
</style>