<!-- 发帖悬钮 -->
<template>
	<view class='post-buoy'>
		<u-button class="post-button" @click="toNewPost"><img src="../../../static/plus.jpg"></u-button>
	</view>
</template>

<script>
	export default {
		name: "PostBuoy",
		data() {
			return {
				show: false,
				value: '',
				title: '标题',
			}
		},
		methods:{
			toNewPost(){
				uni.navigateTo({
					url: "/pages/components/PostArea/NewPost/NewPost"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.post-button {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: cornflowerblue;

		img {
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
