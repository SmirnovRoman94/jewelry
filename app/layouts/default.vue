<template>
	<TheHeader/>
	<main class="max-w-screen-xl mx-auto">
		<slot/>
	</main>
	<TheFooter/>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';


</script>