<!-- 回复&评论页 -->
<template>
	<view class="main">
		<view v-for="(Info,answerId) in commentInfos" :key=answerId>
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
		
		<view v-for="(Info,answerTime) in answerToAnswer" :key=answerTime>
			<uni-card :title=Info.answerName :sub-title=subTitle3 :extra=Info.answerTime :thumbnail=Info.answerAvatar
				@click="onClick" margin="10rpx">
				<text class="uni-body" style="font-family: '微软雅黑';font-weight: 800;">{{Info.answerText}}</text>
				<uni-card :is-shadow="false" style="background-color: lightgray;border-radius: 10rpx;" class="post"
					is-full>
					<text class="postTitle" style="font-weight: bold;"><span
							style="color:brown;">{{Info.targetName}}</span>:{{Info.targetText}}</text>
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
				userid:0,
				commentInfos: [{
					answerName: '明凯',
					answerAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					answerTime: '2022-7-30 14:34',
					answerText: '兄弟，你什么冠军？',
					answerId: 1002,
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
					answerId: 565,
					postId: 55,
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					commentName: '明凯',
					commentText: '你的野区我养猪',
					username: '简自豪',
					postTime: '',
				}, ],
				answerToAnswer: [{
					answerName: '下路',
					answerAvatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
					answerTime: '2022-8-2 17:30',
					answerText: '你怎么不来？',
					answerId: 0,
					postId: '帖子2',
					postTitle: '关于我拿了11次冠军这件事，我觉得有必要开个帖子聊聊',
					targetName: '明凯',
					targetText: '上路叫我',
					username: '简自豪',
					postTime: '',
				}, ],
				subTitle1: "评论了你的帖子",
				subTitle2: "回复了你",
				subTitle3: "回复了你的评论",
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
				this.userid=this.$userId
				await this.$request({
					url: '/xboot/comment/getPostComment',
					method: 'POST',
					data:{
						userid:parseInt(this.userid)
					}
				}).then((res) => {
					console.log("评论消息:", res)
					let d = res.data.result
					var comment = {}
					this.commentInfos=[]
					for (let i = 0; i < res.data.result.length;i+=4) {
						comment={
							answerTime:d[i],
							answerName:d[i+1].nickName,
							answerAvatar:d[i+3].avatar,
							answerText:d[i+1].commentContent,
							answerId:d[i+1].id,
							postId:d[i+1].postId,
							postTitle:d[i+2].postTitle,
							username:d[i+2].nickName
						}
						this.commentInfos.push(comment)
					}
				})

			},

			async getAnswerInfo() { //获取对评论的回复
				this.userid=this.$userId
				const answerRes = await this.$request({
					url: '/xboot/answer/getAnswerToComment',
					method: 'POST',
					data:{
						userid:parseInt(this.userid)
					}
				}).then((res) => {
					console.log("回复评论:", res)
					var answer = {}
					this.answerInfos=[]
					let d = res.data.result
					for (let i = 0, j=0; i < res.data.result.length,j<=i; i+=5,j++) {
						answer={
							answerTime:d[i],
							answerName:d[i+1].nickName,
							answerAvatar:d[i+3].avatar,
							answerText:d[i+1].answerContent,
							answerId:d[i+1].id,
							commentName:d[i+4].nickName,
							commentText:d[i+4].commentContent,
							postId:d[i+1].targetPostId,
							postTitle:d[i+2].postTitle,
							username:d[i+2].nickName
						}
						this.answerInfos.push(answer)
					}
				})
			},
			async getAnswerToAnswer() { //获取对回复的回复
				const answerRes = await this.$request({
					url: '/xboot/answer/getAnswerToAnswer',
					method: 'POST',
					data:{
						userid:parseInt(this.userid)
					}
				}).then((res) => {
					// console.log("回复to回复:", res)
					let d = res.data.result
					var answer = {}
					this.answerToAnswer=[]
					for (let i = 0, j=0; i < res.data.result.length,j<=i; i+=5,j++) {
						answer={
							answerTime:d[i],
							answerName:d[i+1].nickName,
							answerAvatar:d[i+3].avatar,
							answerText:d[i+1].answerContent,
							answerId:d[i+1].id,
							targetName:d[i+4].nickName,
							targetText:d[i+4].commentContent,
							postId:d[i+1].targetPostId,
							postTitle:d[i+2].postTitle,
							username:d[i+2].nickName
						}
						this.answerToAnswer.push(answer)
											
					}
				})
			}
			
		},
		onLoad() {
			this.getCommentInfo()
			this.getAnswerInfo()
			this.getAnswerToAnswer()
		}
	};
</script>

<style lang="scss">
	.card {
		margin: 0px;
	}
</style>
