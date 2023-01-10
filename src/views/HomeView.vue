<template>
	<div>
		<img src="@/assets/images/main_banner_1.jpg" />
		<div class="btn-group">
			<button
				v-for="(tab, index) in TAB_INFO"
				:key="index"
				@click="selectedTab = index"
			>
				{{ tab.title }}
			</button>
			<!-- <button @click="selectedTab = 0">Main Tab 1</button>
		<button @click="selectedTab = 1">Main Tab 2</button>
		<button @click="selectedTab = 2">Main Tab 3</button> -->
		</div>

		<div class="desc">
			<h2>
				{{ TAB_INFO[selectedTab].subTitle }}
			</h2>
			<p>
				What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
				and typesetting industry. Lorem Ipsum has been the industry's standard
				dummy text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has survived
				not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with
				the release of Letraset sheets containing Lorem Ipsum passages, and more
				recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</p>
			<p>
				Why do we use it? It is a long established fact that a reader will be
				distracted by the readable content of a page when looking at its layout.
				The point of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using 'Content here, content
				here', making it look like readable English. Many desktop publishing
				packages and web page editors now use Lorem Ipsum as their default model
				text, and a search for 'lorem ipsum' will uncover many web sites still
				in their infancy. Various versions have evolved over the years,
				sometimes by accident, sometimes on purpose (injected humour and the
				like).
			</p>
			<p>
				Where does it come from? Contrary to popular belief, Lorem Ipsum is not
				simply random text. It has roots in a piece of classical Latin
				literature from 45 BC, making it over 2000 years old. Richard
				McClintock, a Latin professor at Hampden-Sydney College in Virginia,
				looked up one of the more obscure Latin words, consectetur, from a Lorem
				Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from
				sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
				Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
				treatise on the theory of ethics, very popular during the Renaissance.
				The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
				from a line in section 1.10.32.
				<br />
				The standard chunk of Lorem Ipsum used since the 1500s is reproduced
				below for those interested. Sections 1.10.32 and 1.10.33 from "de
				Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
				original form, accompanied by English versions from the 1914 translation
				by H. Rackham.
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref(0);
const TAB_INFO = [
	{ title: 'First Temp', subTitle: 'Sub Title First', alt: 'blabla' },
	{ title: '222 Temp', subTitle: 'a', alt: 'slide show' },
	{ title: 'Others', subTitle: 'b', alt: 'what else?' },
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
.btn-group button:hover {
	background-color: #b2bebf;
}
.desc {
	padding: 10px;
	/* text-align: center; */
	text-align: justify;
}
</style>
