<template>
	<div class="contents">
		<h2>Select Item..</h2>
		<div
			v-for="({ question }, index) in questions"
			:key="index"
			class="item-group"
		>
			<template v-for="item in question" :key="item">
				<div
					class="item"
					:class="{ selected: answers[index] == item }"
					@click="answers[index] = item"
				>
					{{ item }}
				</div>
			</template>
		</div>

		{{ answers }}
	</div>
</template>

<script setup>
import { ref } from 'vue';

const questions = [
	{ question: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	{ question: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
	{ question: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
	{ question: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
	{ question: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] },
];
const answers = ref([-1, -1, -1, -1, -1]);
</script>

<style scoped>
.contents {
	padding: 20px;
}
.item-group {
	margin: 10px auto;
}
.item {
	width: 70px;
	text-align: center;
	display: inline-block;
	padding: 0 25px;
	height: 50px;
	font-size: 16px;
	line-height: 50px;
	border-radius: 25px;
	background-color: #f1f1f1;
	color: #3b3936;
}
.selected {
	background-color: #486966;
	color: white;
}
</style>
