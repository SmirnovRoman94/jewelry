<template>
	<div>
		<h2>Plan Your Visit</h2>
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
		title: 'Dates',
		text: '<span>March 15 — August 30, 2025</span>'
	},
	{
		title: 'Location',
		text: '<span>Museum of Applied Arts 1 Design Square, Gallery Wing</span>'
	},
	{
		title: 'Hours',
		text: '<span>Tue — Sun: 10:00 — 18:00</span><br/><span>Thursday late: until 21:00</span>'
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
}
</style>