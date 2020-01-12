<template>
	<div id="loading">
		<van-loading size="200px" class="vanloading" color="#1989fa" />
	</div>
	
	
</template>

<script>
	export default {
		
		data(){
			return {}
		}
	}
	
	
	
</script>


<style lang="scss">
	#loading{
		position: absolute;
		z-index: 1000000;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		.vanloading{
			width: 150px;
			position: fixed;
			top:50%;
			left:50%;
			margin-left:-75px;
			transform: translateY(-50%);
			z-index: 99999999;
		}
	}
	
</style>
