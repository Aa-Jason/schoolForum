<template>
	<view>
		<view class="postArea">
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
		</view>
	</view>
</template>

<script>
	import PostBuoy from "@/pages/components/PostArea/PostBuoy.vue"
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	export default {
		name: 'Trade',
		components: {
			PostCard,
			PostBuoy
		},
	
		data() {
			return {
				postData: [{
					postTitle: '虚空冠军',
					postId: '265',
					postContent: '乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postPart: '2',
					partName: '恋爱交友',
					postTime: '2022-7-27 13:29',
					supportCount: 6,
					commentCount: 3,
					nickname: '简自豪',
					avatar: '/static/avator.jpg',
					urls2: [
						'https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
						'https://cdn.uviewui.com/uview/album/7.jpg',
						'https://cdn.uviewui.com/uview/album/8.jpg',
						'https://cdn.uviewui.com/uview/album/9.jpg',
						'https://cdn.uviewui.com/uview/album/10.jpg',
					],
				}, ]
			}
		},
		methods: {
			getPostData() { //获取帖子数据
				const res = uni.$request({
					url: '/pages/getPostData?pageindex=' + this.pageindex,
					method: "POST",
					data: {
						postData: JSON.stringify(postData)
					},
				})
				this.postData = res.data.message
			},
			toPost() { //点击跳转至帖子详情页
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			},
			click() {
				console.log(0)
			}
		},
	}
</script>

<style lang="scss">
	.post{
		margin: 5px;
		padding-bottom: 10px;
	}
</style>
