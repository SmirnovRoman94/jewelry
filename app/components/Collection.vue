<template>
	<div>
		<h2>Featured Pieces</h2>
		<p class="info">A selection from the current exhibition.</p>
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
		title: 'Radiant Solitaire',
		text: 'Platinum & diamond, c. 1920',
		image: 'about.webp'
	},
	{
		title: 'Emerald Cascade',
		text: 'Gold & emerald, contemporary',
		image: 'about.webp'
	},
	{
		title: 'Pearl Strand',
		text: 'South Sea pearls, 18K gold',
		image: 'about.webp'
	},
	{
		title: 'Midnight Band',
		text: 'Black diamond & white gold',
		image: 'about.webp'
	},
	{
		title: 'Art Deco Bracelet',
		text: 'Platinum, sapphire & diamond',
		image: 'about.webp'
	},
	{
		title: 'Ruby Cluster',
		text: 'Yellow gold & Burmese ruby',
		image: 'about.webp'
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