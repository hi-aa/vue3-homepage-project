<template>
	<div class="header">
		<div id="myTopnav" class="topnav">
			<!-- <h2>Title Nav</h2> -->
			<a href="/" class="active">Home</a>
			<a href="#news">News</a>
			<a href="#contact">Contact</a>
			<a href="#about">About</a>
			<a href="javascript:void(0);" class="icon" onclick="myFunction()">
				<font-awesome-icon icon="fa fa-bars" />
				아이콘
				<!-- <i class="fa fa-bars"></i> -->
			</a>
		</div>
	</div>
</template>

<script setup></script>

<style>
.topnav {
	overflow: hidden;
	background-color: #333;
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

.topnav a:hover {
	background-color: #ddd;
	color: black;
}

.topnav a.active {
	background-color: #04aa6d;
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
