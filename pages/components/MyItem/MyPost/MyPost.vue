<template>
	<view>
		<view class="postArea">
			<PostCard class="post" :postData=postData />
		</view>
	</view>
</template>

<script>
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	export default {
		name: 'Trade',
		components: {
			PostCard,
		},
		data() {
			return {
				userid:0,
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

					],
				}, ]
			}
		},
		methods: {
			async getNewPost() {
				this.userid=this.$userId
				await this.$request({
					url: '/xboot/post/getPostById',
					method: 'POST',
					data: {
						id:this.userid,
						dif:1
					}
				}).then((res) => {
					console.log("我的帖子:", res)
					console.log("帖子数量:", res.data.result.length)
					let d = res.data.result
					var post = {}
					this.postData = []
					for (let i = 0; i < res.data.result.length; i++) {
						post = {
							postTitle: d[i].postTitle,
							postId: d[i].id,
							postContent: d[i].postContent,
							partName: d[i].postPart,
							postTime: d[i].createTime,
							supportCount: d[i].supportCount,
							commentCount: d[i].commentCount,
							nickname: d[i].nickName,
							avatar: d[i].avatar,
							urls2: [d[i].postPicture]
						}
						this.postData.push(post)
					}
				})
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
		onLoad() {
			this.getNewPost()
		}
	}
</script>

<style lang="scss">
	.post{
		margin: 5px;
		padding-bottom: 10px;
	}
</style>
