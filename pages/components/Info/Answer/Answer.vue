<!-- 回复&评论页 -->
<template>
	<view class="main">
		<view v-for="(Info,index) in commentInfos" :key=index>
			<uni-card class="card" :title=Info.answerName :sub-title=subTitle1 :extra=Info.answerTime
				:thumbnail=Info.answerAvatar margin="10rpx">
				<text class="uni-body" style="font-family: '微软雅黑';font-weight: 800;">{{Info.answerText}}</text>
				<uni-card @click="toPost(Info.postId)" :is-shadow="true" shadow="0px 0px 2px 0px"
					style="border-radius: 10rpx;" margin="0px">
					<text class="uni-h6"><span style="color:brown;">{{Info.username}}</span>:{{Info.postTitle}}</text>
				</uni-card>
				<view class="answerButton" style="float: right;margin-top: 5px;color:slategray;font-size: 15rpx;">
					<text @click="openCommentAnswer">回复</text>
				</view>

				<u-popup :show=commentShow :round="5" @close="close" focus=true>
					<view>
						<textarea id="commentTextarea" placeholder="回复:" maxlength="255"></textarea>
					</view>
					<view>
						<u-button type="primary" @click="sendAnswer(Info.answerId)" text="发送"></u-button>
					</view>
				</u-popup>
			</uni-card>
		</view>

		<view v-for="(Info,index) in answerInfos" :key=index>
			<uni-card :title=Info.answerName :sub-title=subTitle2 :extra=Info.answerTime :thumbnail=Info.answerAvatar
				@click="onClick" margin="10rpx">
				<text class="uni-body" style="font-family: '微软雅黑';font-weight: 800;">{{Info.answerText}}</text>
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
				<view class="answerButton" style="float: right;margin-top: 5px;color:slategray;font-size: 15rpx;">
					<text @click="openAnswer">回复</text>
				</view>

				<u-popup :show=answerShow :round="5" @close="close" focus=true>
					<view>
						<textarea id="answerTextarea" placeholder="回复:" maxlength="255"></textarea>
					</view>
					<view>
						<u-button type="primary" @click="sendAnswer(Info.answerId)" text="发送"></u-button>
					</view>
				</u-popup>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				commentInfos: [{
					answerName: '明凯',
					answerAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					answerTime: '2022-7-30 14:34',
					answerText: '兄弟，你什么冠军？',
					answerId: '回复评论',
					postId: '帖子1',
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					username: '简自豪',
					postText: '乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postTime: '',
				}, ],
				commentShow: false,
				answerShow: false,
				answerInfos: [{
					answerName: '卢本伟',
					answerAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					answerTime: '2022-7-30 17:30',
					answerText: '打团怎么不见你人？',
					answerId: '回复回复',
					postId: '帖子2',
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					commentName: '明凯',
					commentText: '你的野区我养猪',
					username: '简自豪',
					postTime: '',
				}, ],
				subTitle1: "评论了你的帖子",
				subTitle2: "回复了你",
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		methods: {
			onClick(e) {
				console.log()
			},
			openCommentAnswer() {
				this.commentShow = true
			},
			openAnswer() {
				this.answerShow = true
			},
			close() {
				this.commentShow = false
				this.answerShow = false
			},
			sendAnswer(id) { //回复,将回复的对象id传给后端
				this.commentShow = false
				this.answerShow = false
				console.log(id)
				this.$request({
					url: '',
					data: {
						commentId: id
					}
				})
				uni.showToast({
					title: '回复成功',
					icon: "success"
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
			async getCommentInfo() { //获取评论信息
				const commentRes = await this.$request({
					url: '',
					method: 'POST',
				})
				console.log(commentRes)
			},

			async getAnswerInfo() { //获取回复信息
				const answerRes = await this.$request({
					url: '',
					method: 'POST',
				})
				console.log(answerRes)
			}
		},
		onUnload() {
			this.getCommentInfo()
			this.getAnswerInfo()
		}
	};
</script>

<style lang="scss">
	.card {
		margin: 0px;
	}
</style>
