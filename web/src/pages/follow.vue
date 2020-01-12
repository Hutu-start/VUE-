<template>
	<div id="follow">
		<van-tabs  scrollspy sticky :offset-top="61" v-show="display">
			<van-tab v-for="(val,index) in list" :title="val.type" :key="index">
				<!-- {{ val }} -->
				<div class="follow__tabs-case">
					<h3>{{val.type}}</h3>
					<ul>
						<router-link 
							tag="li" 
							v-for="item of val.listarr" 
							:key="item._id" 
							:to="{path:'/detail/'+item._id}" 
						> 
							<a href="javascript:;">
								<img :src="$baseUrl + item.imgsrc" alt="">
								<p>{{item.title}}</p>
								<span>{{item.introduce}}</span>
								<i>￥{{item.price}}</i>
								<em>{{item.sale}}折</em>
							</a>
						</router-link>
					</ul>
				</div>
			</van-tab>
		</van-tabs>
	</div>
	
	
</template>

<script>
import * as types from '../store/types.js'

    let top=0;//存储滚动位置
	export default {
		
		data(){
			return {
				list:[{type:'文学',listarr:[]},{type:'少儿',listarr:[]},{type:'智力开发',listarr:[]},{type:'百科',listarr:[]},{type:'自然',listarr:[]},{type:'科学',listarr:[]},{type:'科普',listarr:[]},{type:'新闻',listarr:[]},{type:'财经',listarr:[]},{type:'期刊',listarr:[]},{type:'地理',listarr:[]}],
				followgoods:[],
				display:false
			}
		},
		mounted(){
			document.documentElement.scrollTop=top;	
		},
		destroyed(){
      		top=document.documentElement.scrollTop; 
		},
		created(){
			this.$axios(
				{url:'/api/goods',
				params:{_page:1,_limit:30}
				}
			).then((res)=>{
				this.followgoods = res.data.data;
				// console.log(this.followgoods);
				this.$store.commit(types.FOLLOW,{...this.followgoods});
				for(let i = 0;i<this.followgoods.length;i++){
					for(let j = 0;j<this.list.length;j++){
						if(this.followgoods[i].otype.indexOf(this.list[j].type)!=-1){
							this.list[j].listarr.push(this.followgoods[i])
						}
					}
					
				}
				this.display='true'
			})
		}
	}
	
	
	
</script>


<style lang="scss">
	#follow{
		// height: 10000px;
		background: #f2f2f2;
		width: 710px;
		padding: 0 20px;
		// margin: 0 auto;
		.van-tabs{
			margin-bottom: 40px;
			.van-sticky{
				height: 60px !important;
				.van-tabs__wrap{
				height: 76px !important;
				border-bottom: 1px solid #aaa;
				.van-tab{
					span{
						font-size: 36px;
						line-height: 70px;
					}
				}
				}
				.van-tab--active{
					color: #ff7e00;
				}
			}
			.van-tabs__content{
				padding-top: 50px;
				background: #fff;
			}
			.follow__tabs-case{
				width: 100%;
				
				h3{
					font-size: 40px;
					line-height: 60px;
					color: #ff7e00;
					// border-bottom: 1px solid #eee;
					padding-left: 30px;
				}
				ul{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					li{
						width: 345px;
						height: 600px;
						box-shadow: 0 0 3px #999;
						margin: 20px 0;
						a{
							display: block;
							background: #fff;
							text-align: center;
							img{
								width: 330px;
								height: 355px;

							}
							p{
								font-size: 30px;
								line-height: 40px;
								height: 80px;
								color: #000;
								margin: 0 10px;
								overflow: hidden;
							}
							span{
								font-size: 24px;
								line-height: 30px;
								margin: 0 10px;
								height: 60px;
								color: #666;
								display: block;
								overflow: hidden;
							}
							i{
								font-size: 34px;
								line-height: 50px;
								color: #000;
							}
							em{
								font-size: 30px;
								line-height: 50px;
								color: #c79d6b;
								margin-left: 40px;
							}
						}
					}
				}
			}
		}
	}
	
</style>
