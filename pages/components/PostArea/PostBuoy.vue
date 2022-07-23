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
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-color: cornflowerblue;

		img {
			width: 50px;
			height: 50px;
		}
	}
</style>
