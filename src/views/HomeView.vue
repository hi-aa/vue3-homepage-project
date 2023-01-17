<template>
	<div>
		<img src="@/assets/images/main_banner_1.jpg" />
		<div class="btn-group">
			<button
				v-for="(tab, index) in TAB_INFO"
				:key="index"
				:class="{ active: selectedTab == index }"
				@click="selectedTab = index"
			>
				{{ tab.buttonText }}
			</button>
		</div>
		<div class="desc">
			<KeepAlive>
				<component :is="TAB_INFO[selectedTab].view"></component>
			</KeepAlive>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import ContentsView1 from './tab1/ContentsView1.vue';
import ContentsView2 from './tab1/ContentsView2.vue';
import ContentsView3 from './tab1/ContentsView3.vue';

const selectedTab = ref(0);
const TAB_INFO = [
	{ view: ContentsView1, buttonText: 'First Temp' },
	{ view: ContentsView2, buttonText: '2 Temp' },
	{ view: ContentsView3, buttonText: '3 Temp' },
];
</script>

<style scoped>
img {
	width: 100%;
	display: block;
}
.btn-group {
	width: 100%;
	margin: 0;
}
button {
	width: 33.33%;
}
.btn-group button {
	background-color: #486966;
	border: 1px solid white;
	color: white; /* White text */
	padding: 10px 24px; /* Some padding */
	cursor: pointer; /* Pointer/hand icon */
	float: left; /* Float the buttons side by side */
}

.btn-group button:not(:last-child) {
	border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
	content: '';
	clear: both;
	display: table;
}

/* Add a background color on hover */
.btn-group button:hover,
.btn-group button.active {
	background-color: #b2bebf;
}
.desc {
	padding: 10px;
	/* text-align: center; */
	text-align: justify;
}
</style>
