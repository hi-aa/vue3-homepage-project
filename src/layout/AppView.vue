<template>
	<!-- <main> -->
	<div class="row">
		<div class="contents">
			<RouterView></RouterView>
		</div>
	</div>
	<!-- </main> -->
</template>

<script setup></script>

<style scoped>
/* Clear floats after the columns */
.row:after {
	content: '';
	display: table;
	clear: both;
}
.contents {
	padding: 0;
	width: 100%;
}
/* Left column */
/* .leftcolumn {
	float: left;
	width: 75%;
} */
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 800px) {
	.leftcolumn,
	.rightcolumn {
		width: 100%;
		padding: 0;
	}
} */
</style>
