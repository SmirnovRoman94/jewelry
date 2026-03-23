<template>
	<div>
		<h2>Коллекция</h2>
		<p class="info">Ювелирные украшения ручной работы</p>
		<div class="mt-5 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			<div v-for="(el, index) in collection" :key="index" class="card" >
				<img :src="`${baseURL}images/${el.image}`"/>
				<div class="my_text">
					<h3>{{ el.title }}</h3>
					<p>{{ el.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL


const collection = [
	{
		title: 'Брошь «Goddess of the Universe»',
		text: 'Жёлтое и белое золото, чёрные таитянские жемчужины & бриллианты',
		image: '1.webp'
	},
	{
		title: 'Серьги «Ancient Aztec Spirit»',
		text: 'Белое золото, ажурная резьба по металлу в стиле майя/ацтеков',
		image: '2.webp'
	},
	{
		title: 'Серьги «Pearl Blossom Dream»',
		text: 'Золото высокой пробы, крупные розовые жемчужины Mabe & коньячный сапфир',
		image: '5.webp'
	},
	{
		title: 'Кольцо «Moon Night Garden»',
		text: 'Золото и таитянская чёрная жемчужина',
		image: '4.webp'
	},
	{
		title: 'Серьги «Passion Fire Drop»',
		text: 'Золото, брилианты & родолит гранат',
		image: '3.webp'
	},
	{
		title: 'Кольцо «Autumn Blossom Story»',
		text: 'Жемчужина Mabe, бриллианты & цитрин',
		image: '6.webp'
	}
]
</script>

<style scoped>
h2 {
	font-family: 'PoiretOne';
	font-size: 48px;
	text-align: center;
}

.info {
	font-family: 'Raleway';
	text-align: center;
	font-size: 14px;
}

.card {
	height: 360px;
	width: 360px;
	border: 1px solid white;
	transition: border .5s;
	position: relative;
	overflow: hidden;
	cursor: pointer;
}

.card:hover {
	border: 1px solid rgb(241, 161, 25);
}

.card:hover .card-image {
	transform: scale(1.1);
}

.card:hover .my_text {
	transform: translateY(0);
	opacity: 1;
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform .5s ease;
}

.my_text {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px;
	color: white;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
	transform: translateY(100%);
	opacity: 0;
	transition: transform .5s ease, opacity .5s ease;
}

.my_text h3 {
	margin: 0 0 5px 0;
	font-size: 18px;
}

.my_text p {
	margin: 0;
	font-size: 14px;
}

@media (max-width: 1024px) {
	.card {
		width: 100%;
		height: 100%;
	}
}

@media (max-width: 640px) {
	h2 {
		font-size: 24px;
		padding-top: 20px;
	}
}
</style>