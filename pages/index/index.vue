<template>
	<view class="content">
		<view>
			<MainPage />
		</view>
		<u-notify ref="uNotify" :show="show"></u-notify>
		<view class="postArea">
			
		</view>
		
		
	</view>
</template>

<script>
	import MainPage from "@/pages/components/MainPage"
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	
	export default {
		components:{
			MainPage,
			PostCard
		},
		data() {
			return {
				show:true,
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			console.log("爬取新帖子")
			uni.request({//加载新帖子
				
			})
			uni.stopPullDownRefresh()
			this.$refs.uNotify.show({
			            top: 120,
			            type: 'primary',
			            message: '刷新成功',
			            duration: 1000,
			            fontSize: 10,
			            safeAreaInsetTop:true
			        })
		},
		onReachBottom() {
			console.log("加载更多内容")
			alert("000")
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.postArea{
		margin-bottom: 5px;
	}
	// .tabbar{//底部导航栏
	// 	z-index:1000;
	// 	position:fixed;
	// 	bottom:0;
	// 	width: 100%;
	// 	height: 90rpx;
	// }
</style>
