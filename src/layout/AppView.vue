<template>
	<div class="row">
		<div class="contents">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
/* .row:after {
	content: '';
	display: table;
	clear: both;
} */
.contents {
	padding: 10px;
	width: 100%;
}
</style>
