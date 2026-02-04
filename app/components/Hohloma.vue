<template>
	<div class="flower-container" ref="containerRef"></div>
</template>

<script setup>
const containerRef = ref(null);

onMounted(async () => {
	try {
		// Загружаем SVG
		//const response = await fetch('/images/hohloma.svg');
		const baseURL = useRuntimeConfig().app.baseURL
		const response = await fetch(`${baseURL}images/hohloma.svg`);
		const svgText = await response.text();

		// Вставляем SVG в контейнер
		containerRef.value.innerHTML = svgText;

		// Находим сам SVG элемент
		const svg = containerRef.value.querySelector('svg');
		if (!svg) return;

		// Находим все элементы, которые нужно анимировать
		const paths = svg.querySelectorAll('path, circle, rect, line, polyline, polygon');

		// Сохраняем оригинальные стили ДО изменения
		const originalStyles = [];

		paths.forEach((element, index) => {
			const originalFill = element.getAttribute('fill');
			const originalStroke = element.getAttribute('stroke');

			// Сохраняем оригинальные стили
			originalStyles.push({
				fill: originalFill,
				stroke: originalStroke
			});

			// Устанавливаем начальные стили для анимации
			element.style.fill = 'none';
			element.style.stroke = originalStroke || originalFill || '#8B4513';
			element.style.strokeWidth = '1.5';

			const length = element.getTotalLength?.() || 1000;
			element.style.strokeDasharray = length;
			element.style.strokeDashoffset = length;
		});

		// Запускаем анимацию с задержкой
		setTimeout(() => {
			paths.forEach((element, index) => {
				setTimeout(() => {
					// Анимация stroke-dashoffset
					element.style.transition = 'stroke-dashoffset 2s ease-out, fill 0.5s ease-in 2s';
					element.style.strokeDashoffset = '0';

					// Восстанавливаем оригинальные цвета после завершения отрисовки
					setTimeout(() => {
						element.style.fill = originalStyles[index].fill;
						element.style.stroke = originalStyles[index].stroke;
						element.style.strokeWidth = '';
					}, 1000);
				}, index * 10); // Задержка между элементами для последовательной отрисовки
			});
		}, 100);

	} catch (error) {
		console.error('Ошибка загрузки SVG:', error);
	}
});

</script>

<style scoped>
.flower-container {
	display: flex;
	justify-content: center;
	align-items: center;
	/*padding: 20px;*/
}

.flower-container :deep(svg) {
	max-width: 100%;
	height: auto;
}
</style>