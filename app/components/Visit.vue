<template>
	<div class="w-full mx-auto max-w-screen-xl">
		<h2>Связаться с нами</h2>
		<div class="mt-5 flex gap-8 flex flex-wrap sm:flex-nowrap mb-8 sm:mb-0">
			<div v-for="(el, index) in plans" :key="index" class="plan">
				<h3>{{ el.title }}</h3>
				<div class="text" v-html="el.text"></div>
			</div>
		</div>
	</div>
</template>

<script setup>

const plans = [
	{
		title: 'Даты и время',
		text: '<span>11-14 июня 2026</span><br/><span>Ежедневно с 11:00-19:00</span><br/><span>Вход: свободный</span>'
	},
	{
		title: 'Место',
		text: '<span>Музей связи имени А.С. Попова,</span><br/><span>Санкт-Петербург, Почтамтская ул., 7</span>'
	},
	{
		title: 'Контакты',
		text: '<a href="tel:+79006209520">+7 (900) 620-95-20</a><br/><a href="tel:+79517227254">+7 (951) 722-72-54</ф>'
	},
]
</script>

<style scoped>
h2 {
	font-family: 'PoiretOne';
	font-size: 48px;
	text-align: center;
}

.plan {
	width: 100%;
	padding: 20px;
	border: 1px solid white;
	transition: border .5s;
	cursor: pointer;
}

.plan:hover {
	border: 1px solid rgb(241, 161, 25);
}

h3 {
	font-family: 'PoiretOne';
	text-transform: uppercase;
	color: #c9a962;
	padding-bottom: 10px;
}

.text {
	font-family: 'Raleway';

}

@media (max-width: 640px) {
	h2 {
		font-size: 24px;
		padding-top: 20px;
	}

	h3 {
		font-size: 14px;
	}

	.text {
		font-size: 14px;
	}

	.plan {
		padding: 16px 12px;
	}
}
</style>