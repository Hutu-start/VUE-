<template>
	<div id="index__header">
		<div class="new__index__head">
			<router-link class="so"  to="/so" active-class="">
				<a href="javascript:;">
					<div class="new__index__l">
						<img src="../assets/images/search_logo.png" class="search__logo">
						<span>环球少年地理</span>
						<img src="../assets/images/search-1.png" class="search__icon">
					</div>
				</a>
			</router-link>
			<div class="new__index__r">
				<a href="" tppabs="">
					<img src="../assets/images/news_icon.png">
				</a>
			</div>
		</div>
		<div class="index__header-empty"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		}
	}
	
	
	
</script>


<style>
	#index__header{height:121px;width: 100%;background: url('../assets/images/headbg.png') no-repeat;background-size: 100% 100%}
	#index__header .new__index__head{padding:25px 20px;width: 100%;position: fixed;background: url('../assets/images/headbg.png') no-repeat;background-size: 100% 100%;z-index: 1000;}
	#index__header .index__header-empty{height:121px}
	#index__header .new__index__head a{}
	#index__header .new__index__head a .new__index__l{width: 630px;height: 73px;border-radius: 30px;background: #fff;float: left;}
	#index__header .new__index__head a .new__index__l .search__logo{width: 30px;margin: 11px 0 0 34px;float: left;}
	#index__header .new__index__head a .new__index__l span{margin-left: 25px;font-size: 28px;line-height: 73px;float: left;color: #EC2428}
	#index__header .new__index__head a .new__index__l .search__icon{width: 38px;float: right;margin:18px 33px 0 0 }
	#index__header .new__index__head .new__index__r{float: right;margin:18px 50px 0 0}
	#index__header .new__index__head .new__index__r  img{width: 42px;}
	
</style>
