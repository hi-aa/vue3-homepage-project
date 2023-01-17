<template>
	<div class="header">
		<div id="myTopnav" class="topnav" :class="{ responsive: showMenu }">
			<router-link :to="{ name: 'home' }" active-class="active">
				Home
			</router-link>
			<router-link :to="{ name: 'item' }" active-class="active">
				Item
			</router-link>
			<!-- <a href="#contact">Contact</a> -->
			<!-- <a href="#about">About</a> -->

			<a href="javascript:void(0);" class="icon" @click="showMenu = !showMenu">
				<font-awesome-icon icon="fa-solid fa-bars" />
			</a>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

/** 모바일 화면 메뉴버튼 클릭 */
const showMenu = ref(false);
</script>

<style>
.topnav {
	overflow: hidden;
	background-color: #3b3936;
}

.topnav a {
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
}

/* .topnav a:hover {
	background-color: #b2bebf;
	color: white;
} */

.topnav a.active {
	background-color: #486966;
	color: white;
}

.topnav .icon {
	display: none;
}

@media screen and (max-width: 600px) {
	.topnav a:not(:first-child) {
		display: none;
	}
	.topnav a.icon {
		float: right;
		display: block;
	}
}

@media screen and (max-width: 600px) {
	.topnav.responsive {
		position: relative;
	}
	.topnav.responsive .icon {
		position: absolute;
		right: 0;
		top: 0;
	}
	.topnav.responsive a {
		float: none;
		display: block;
		text-align: left;
	}
}
</style>
