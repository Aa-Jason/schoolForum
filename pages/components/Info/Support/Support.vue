<!-- 点赞页 -->
<template>
	<view class="main">
		<view v-for="(Info,index) in postInfos" :key=index>
			<uni-card class="card" :title=Info.supportName :sub-title=subTitle1 :extra=Info.supportTime
				:thumbnail=Info.supportAvatar @click="onClick" margin="10rpx">

				<uni-card @click="toPost(Info.postId)" :is-shadow="true" shadow="0px 0px 2px 0px" is-full style="border-radius: 10rpx;">
					<text class="uni-h6"><span style="color:brown;">{{Info.username}}</span>:{{Info.postTitle}}</text>
				</uni-card>
			</uni-card>
		</view>

		<view v-for="(Info,index) in commentInfos" :key=index>
			<uni-card :title=Info.supportName :sub-title=subTitle2 :extra=Info.supportTime :thumbnail=Info.supportAvatar
				@click="onClick" margin="10rpx">
				<uni-card :is-shadow="false" style="background-color: lightgray;border-radius: 10rpx;" class="post"
					is-full>
					<text class="postTitle" style="font-weight: bold;"><span
							style="color:brown;">{{Info.commentName}}</span>:{{Info.commentText}}</text>
					<uni-card @click="toPost(Info.postId)" :is-shadow="true" shadow="0px 0px 2px 0px" is-full style="border-radius: 10rpx;">
						<text class="uni-h6"><span
								style="color:brown;">{{Info.username}}</span>:{{Info.postTitle}}</text>
					</uni-card>
				</uni-card>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

				postInfos: [{
					supportName: '明凯',
					supportAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					supportTime: '2022-7-30 14:34',
					postId: '帖子1',
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					username: '简自豪',
					postText: '乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postTime: '',
				}, ],
				commentInfos: [{
					supportName: '卢本伟',
					supportAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					supportTime: '2022-7-30 17:30',
					postId: '帖子2',
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					commentName: '明凯',
					commentText: '你的野区我养猪',
					username: '简自豪',

					postTime: '',
				}, ],
				subTitle1: "赞了你的帖子",
				subTitle2: "赞了你的回复",
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

			async getPostInfo() { //获取评论信息
				const commentRes = await this.$request({
					url: '',
					method: 'POST',
				})
				console.log(commentRes)
			},

			async getCommentInfo() { //获取回复信息
				const answerRes = await this.$request({
					url: '',
					method: 'POST',
				})
				console.log(answerRes)
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
		onUnload() {
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
