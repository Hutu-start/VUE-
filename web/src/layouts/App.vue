<template>
  <div id="app">
		<!-- <mt-spinner type="snake" color="#26a2ff"></mt-spinner> -->
    <Loading v-show="$store.state.bLoading"/>
    <Header v-if="isHeader"/>
    <!-- {{this.$route.name}} -->
    <!-- <Header/> -->
    <router-view></router-view>
    <Footer v-if="isFooter"/>
    <!-- <Footer/> -->

  </div>
</template>
<script>
  import Home from '../pages/home.vue';
  import Header from './header.vue';
  import Footer from './footer.vue';
	import Loading from '@/components/loading.vue'
	
  export default{
    name:'App',
    components:{
      Home,Footer,Header,Loading
    },
    mounted(){
			
    },
		computed:{
			isHeader() {
				return /Home|Follow|Active/.test(this.$route.name);
			},
			isFooter() {
				return !/Detail/.test(this.$route.name);
			},
		}
    
   
  }
</script>
<style>
  /* body,html{background: #FC2425} */
  
</style>
