<template>
	<div id="buycar">
		<Header title="购物车" />
		<div class="buycar__content-goods">
			<ul class="buycar__content-goodsbox" v-if="this.list">
				<li v-for="item of buycar" :key="item.id">
					<div class="goods-top">
						<div class="goods-select">
							<input type="checkbox" class="checkbox" name="btn" id="item.id" @click="selectItem({id:item.id})" :checked='item.check'>
						</div>
						<div class="goods-top-left">
							<a href="">
								<img :src="$baseUrl + item.imgsrc" alt="">
							</a>	
						</div>
						<div class="goods-top-right">
							<p>{{item.title}}</p>
							<p>{{item.kind}}</p>
							<div class="goods-top-right__bottom">
								<span class="price">￥{{item.price}}</span>
								<span class="price">￥{{item.price*item.number}}</span>
								<p class="numbox">
									<a @click="changeItem({id:item.id,num:-1})">-</a>
									<i>{{item.number}}</i>
									<a @click="changeItem({id:item.id,num:1})">+</a>
								</p>
							</div>
						</div>
					</div>
					<div class="goods-bottom">
						<span @click="removeItem({id:item.id})">删除</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="buycar__content-case">
			<div class="buycar__content-case-left">
				<input type="checkbox" class="checkbox" name="btn" id="allbtn" @click="selectAllItem($event)">
				<span>全选</span>
				<i @click="clearBuycar">删除</i>		
			</div>
			<div class="buycar__content-case-center">
				<span>合计</span>
				<i>￥{{updateGoods.sumPrice}}</i>
			</div>
			<div class="buycar__content-case-right">
				<span>
					去结算(<i>{{updateGoods.num}}</i>)
				</span>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import Header from '../components/ht__header'
	import {mapState, mapActions,mapGetters} from 'vuex'
	import * as types from '../store/types.js'	
	let top = 0;
	export default {
		
		data(){
			return {
				list:[],
				// allprice:'',
				selectArr:[],
				// arr:[]
			}
		},
		components:{
			'Header':Header
		},
		computed:{
			...mapState([
				'buycar'
			]),...mapGetters(['updateGoods'])
		},
		created(){
			if(this.$store.state.buycar.length>0){
				this.list=this.$store.state.buycar
			}else{
				this.$axios({
						url:'/api/user?token='+this.$store.state.user.token,
					}
				).then((res)=>{
					// console.log(res.data.data.goods);

					if(res.data.data){
						var buycar = JSON.parse(res.data.data.goods)
						this.list=buycar
						this.$store.commit('ADD_ITEM', buycar);

					}
				})
			}
			
		},
		updated(){
			var sum = 0;
			for(var i = 0;i<this.buycar.length;i++){
				if(this.buycar[i].check==true){
					sum++;
				}
			}
			var allbtn = document.getElementById('allbtn');
			if(sum===this.buycar.length&&sum!==0){
				allbtn.checked=true;
			}else{
				allbtn.checked=false;
			}
			// this.allprice = this.updateGoods
		},
		methods:{
			...mapActions([
				'changeItem','clearBuycar','removeItem','selectItem','selectAllItem'
			]),
		},
		mounted(){
			var allsum = 0;
			for(var i = 0;i<this.buycar.length;i++){
				if(this.buycar[i].check==true){
					allsum++;
				}
			}
			var allbtn = document.getElementById('allbtn');
			if(allsum===this.buycar.length&&allsum!==0){
				allbtn.checked=true;
			}else{
				allbtn.checked=false;
			}
		}



		// mounted(){
		// 	document.documentElement.scrollTop=top;
		// 	this.$store.commit("ADD_ITEM",
		// 	JSON.parse(window.localStorage.getItem('goodCar'))==''?[]:JSON.parse(window.localStorage.getItem('goodCar')));
			
		// 	// this.arr = this.$store.state.buycar=null?[]:this.$store.state.buycar;
		// 	console.log(this.arr);
			
		// 	for(let i = 0;i<this.arr.length;i++){
		// 		this.$axios(
		// 			{url:'/api/goods',
		// 			params:{_id:this.arr[i].id}
		// 			}
		// 		).then((res)=>{
		// 			// console.log(res);
		// 			res.data.data.number=arr[i].number;
		// 			res.data.data.id=arr[i].id;
		// 			this.list.push(res.data.data)
		// 		})
		// 	}
		// 	console.log(this.list);
			
		// },
		// computed:{...mapState(['buycar']),...mapGetters(['updateGoods']),},
		// methods:{
		// 	...mapActions([
		// 		'changeItem','clearBuycar','removeItem',
		// 	]),
		// 	addarr(res){
		// 		console.log(res);
		// 			for(let i = 0;i<this.buycar.length;i++){
		// 				// if(item.id==this.buycar[i].id){
		// 				// 	this.buycar[i].check=false;
		// 				// }
		// 				this.list.forEach((item,index)=>{
		// 					if(item.id==res.id&&item.id==this.buycar[i].id){
		// 						if(this.buycar[i].check=false){
		// 							item.check=true;
		// 							this.buycar[i].check=false;
		// 						}else if(this.buycar[i].check=true){
		// 							item.check=false;
		// 							this.buycar[i].check=false;

		// 						}
		// 					}
		// 				})	
		// 			}
		// 		this.$store.dispatch(types.GOODS,{...this.bookgoods})
		// 		console.log(this.list);
		// 		let allbtn = document.getElementById('allbtn');
		// 		if(this.selectArr.length==this.list.length){
		// 			console.log(allbtn);
		// 			allbtn.checked=true;
					
		// 		}else{
		// 			allbtn.checked=false;

		// 		}
		// 	}

		// }

	}
	
	
	
</script>


<style lang="scss">
	#buycar{
		background: #f7f7f7;
		// height: 1000px;
		.buycar__content-goods{
			// padding: 0 20px;
			.buycar__content-goodsbox{
				padding: 30px 20px 60px;
				background: #fff;
				li{
					margin-bottom: 30px;
					box-shadow:  0 0 19px #ccc;
					background: #fff;
					border-radius: 20px;	
					height: 260px;
					width: 100%;
					.goods-top{
						display: flex;
						justify-content: space-between;
						height: 190px;
						.goods-select{
							padding: 70px 20px 0 30px;
							input[type=checkbox]{
								display: block;
								width: 35px;
								height: 35px;
								border-radius: 50%;
								border: 1px solid #ccc;
								appearance: none;

								&:checked{
									background: url("../assets/images/checked-icon.png")no-repeat center;
									background-size: 100% 100%;
									border: 0;
								}
							}
							
						}
						.goods-top-left{
							
							a{
								display: block;
								// margin-top: 30px;
								padding: 30px 20px 0;
								img{
									max-width: 142px;
									// height: 200px;
								}
							}
						}
						.goods-top-right{
							margin-top: 30px;
							p{
								width: 430px;
								font-size: 26px;
								line-height: 34px;
								height: 68px;
								overflow: hidden;
							}
							.goods-top-right__bottom{
								margin-top: 30px;
								display: flex;
								justify-content: space-between;
								width: 400px;
								.price{
									font-size: 28px;
									line-height: 60px;
									color: #ff7f00;
								}
								.numbox{
									width: 200px;
									display: flex;
									height: 60px;
									text-align: center;
									font-size: 40px;
									line-height: 60px;
									a{
										display: block;
										width: 60px;
										height: 60px;
										background: #f7f7f7;
									}
									i{
										font-size: 24px;
										line-height: 60px;
										width: 80px;
										height: 60px;
									}
								}
							}
						}
					}
					.goods-bottom{
						// float: right;
						margin-left: 20px;
						span{
							font-size: 20px;
							line-height: 60px;
							width: 100px;
							text-align: center;
							height: 60px;
							display: block;
							background: #fafafa;
							border: 1px solid #f9f9f9;
							border-radius: 20px;
						}
					}
				}
			}
		}
		.buycar__content-case{
			height: 80px;
			position: fixed;
			bottom:98px;
			background: #fff;
			width: 100%;
			border-top: 1px solid #f7f7f7;
			display: flex;
			justify-content: space-between;
			.buycar__content-case-left{
				margin: 20px 20px 0 20px;
				width: 350px;
				input[type=checkbox]{
					display: block;
					width: 35px;
					height: 35px;
					border-radius: 50%;
					border: 1px solid #ccc;
					appearance: none;
					float: left;
					&:checked{
						background: url("../assets/images/checked-icon.png")no-repeat center;
						background-size: 100% 100%;
						border: 0;
					}
				}
				span{
					font-size: 30px;
					line-height: 35px;
					padding-left:20px; 
				}
				i{
					font-size: 26px;
					line-height: 35px;
					margin-left: 30px;
				}
			}
			.buycar__content-case-center{
				padding: 10px 10px;
				margin-left: 100px;
				font-size: 30px;
				line-height: 60px;
				width: 400px;
				span{
					float: left;
				}
				i{
					float: left;
					min-width: 150px;
					color: #ff7f00;
					font-weight: 600;
				}
			}
			.buycar__content-case-right{
				min-width: 150px;
				height: 100%;
				background: #ff7f00;
				font-size: 30px;
				line-height: 80px;
				text-align: center;
				color: #fff;
				span{
					display: block;
					padding: 0 10px;
					i{

					}
				}
			}
		}
	}
	
</style>
