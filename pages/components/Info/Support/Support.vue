<!-- 点赞页 -->
<template>
	<view class="main">
		<view v-for="(Info,supportTime) in postInfos" :key=supportTime>
			<uni-card class="card" :title=Info.supportName :sub-title=subTitle1 :extra=Info.supportTime
				:thumbnail=Info.supportAvatar @click="onClick" margin="10rpx">

				<uni-card @click="toPost(Info.postId)" :is-shadow="true" shadow="0px 0px 2px 0px" is-full
					style="border-radius: 10rpx;">
					<text class="uni-h6"><span style="color:brown;">{{Info.username}}</span>:{{Info.postTitle}}</text>
				</uni-card>
			</uni-card>
		</view>

		<view v-for="(Info,supportTime) in commentInfos" :key=supportTime>
			<uni-card :title=Info.supportName :sub-title=subTitle2 :extra=Info.supportTime :thumbnail=Info.supportAvatar
				@click="onClick" margin="10rpx">
				<uni-card :is-shadow="false" style="background-color: lightgray;border-radius: 10rpx;" class="post"
					is-full>
					<text class="postTitle" style="font-weight: bold;"><span
							style="color:brown;">{{Info.commentName}}</span>:{{Info.commentText}}</text>
					<uni-card @click="toPost(Info.postId)" :is-shadow="true" shadow="0px 0px 2px 0px" is-full
						style="border-radius: 10rpx;">
						<text class="uni-h6"><span
								style="color:brown;">{{Info.username}}</span>:{{Info.postTitle}}</text>
					</uni-card>
				</uni-card>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import dateUtil from '@/common/date.js'
	import Vue from 'vue'
	let dateU = new dateUtil.Util1()
	export default {
		components: {},
		data() {
			return {
				userid: 0,
				postInfos: [{
					supportName: '明凯',
					supportAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					supportTime: '2022-7-30 14:34',
					postId: 5,
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					username: '简自豪',
					postText: '乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postTime: '000',
				}, ],
				commentInfos: [{
					supportName: '卢本伟',
					supportAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					supportTime: '2022-7-30 17:30',
					postId: 0,
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					commentName: '明凯',
					commentText: '你的野区我养猪',
					username: '简自豪',
					postTime: '',
				}, ],
				subTitle1: "赞了你的帖子",
				subTitle2: "赞了你的评论",
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		methods: {
			onClick(e) {
				console.log(e)
			},
			actionsClick(text) {
				uni.showToast({
					title: text,
					icon: 'none'
				})
			},

			async getPostInfo() { //获取帖子点赞
				this.userid = this.$userId

				console.log("userid:", this.userid, typeof(this.userid))
				await this.$request({
					url: '/xboot/support/getPostSupport',
					method: 'POST',
					data: {
						userid: parseInt(this.userid)
					}
				}).then((res) => {
					console.log("帖子点赞:", res)
					let d = res.data.result
					var post = {}
					this.postInfos = []
					for (let i = 0; i < res.data.result.length; i += 2) {
						post = {
							postId: d[i + 1].id,
							postTitle: d[i + 1].postTitle,
							supportTime: d[i],
							username: d[i + 1].nickName,
							supportName: d[i + 2].nickName,
							supportAvatar: d[i + 2].avatar
						}
						this.postInfos.push(post)
					}
				})

			},

			async getCommentInfo() { //获取评论点赞
				this.userid = this.$userId
				await this.$request({
					url: '/xboot/support/getCommentSupport',
					method: 'POST',
					data: {
						userid: parseInt(this.userid)
					}
				}).then((res) => {
					console.log("评论点赞:", res)
					let d = res.data.result
					var post = {}
					this.commentInfos = []
					for (let i = 0, j = 0; i < res.data.result.length, j <= i; i += 3, j++) {
						post = {
							postId: d[i + 1].id,
							postTitle: d[i + 1].postTitle,
							supportTime: d[i],
							username: d[i + 1].nickName,
							supportName: d[i + 2].nickName,
							supportAvatar: d[i + 2].avatar,
							commentName: d[i + 3].nickName,
							commentText: d[i + 3].commentContent
						}
						this.commentInfos.push(post)
					}
				})
			},

			toPost(id) { //点击跳转至对应帖子
				console.log(id)
				this.$request({
					url: '',
					data: {
						postId: id
					}
				})

				uni.navigateTo({
					url: '../../PostArea/Post/Post'
				})
			},
		},
		onLoad() {
			this.getPostInfo()
			this.getCommentInfo()
		}
	};
</script>

<style lang="scss">
	.card {
		margin: 0px;
	}
</style>
