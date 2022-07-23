<template>
	<view class="content">
		<view>
			<MainPage />
		</view>
		<view class="postArea">
			
		</view>
		
		
	</view>
</template>

<script>
	import MainPage from "@/pages/components/MainPage"
	
	export default {
		components:{
			MainPage,
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			uni.stopPullDownRefresh()
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
