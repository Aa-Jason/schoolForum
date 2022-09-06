<!-- 帖子详情页 -->
<template>
	<view class="main">
		<view>
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<view class="album">
						<view class="album__avatar">
							<image :src=postData.avatar mode="" style="width: 32px;height: 32px;">
							</image>
						</view>
						<view class="album__content">
							<u--text :text=postData.nickname type="primary" bold size="17"></u--text>
							<u--text margin="10px 0 8px 0" size=16 bold :text="postData.postTitle">
							</u--text>
							<u--text margin="0 0 8px 0" :text=postData.postContent></u--text>
							<u-album :urls="postData.urls2" multipleSize=150rpx space="3"></u-album>
						</view>
					</view>
					<!-- 时间 点赞 评论 -->
					<view class="postInfo">
						<view class="time"><text>{{postData.postTime}}</text></view>
						<view class="delete"
							style="text-align:left;flex:1;margin-bottom: 10;color:darkred;font-weight: bold;"
							v-if="deleteShow" @click="deletePost(postData.userId)">删除</view>
						<view class="support">
							<u-icon :firstClick=postData.firstClick :name=postData.supportIcon
								:label=postData.supportCount :id=postData.postId @click="support(postData.postId)">
							</u-icon>
						</view>
						<view class="comment">
							<u-icon name='chat' :label=postData.commentCount></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>

		<u-divider text="评论"></u-divider>

		<!-- 评论区 -->
		<view style="margin-bottom: 200px;">
			<view class="commentArea" v-for="(comment,index) in commentData" :key="index">
				<view class="u-demo-block">
					<view class="u-demo-block__content">
						<view class="album" @click="comment.popupShow=true">
							<view class="album__avatar">
								<image :src=comment.avatar mode="" style="width: 20px;height: 20px;"></image>
							</view>
							<view class="album__content">
								<u--text :text=comment.nickName type="dark" bold size="14"></u--text>
								<u--text margin="10px 0 8px 0" :text=comment.content></u--text>
							</view>
						</view>

						<!-- 评论的回复框 -->
						<view class="answerPopup">
							<u-popup :show="comment.popupShow" :round="5" @close="comment.popupShow=false" @open="open"
								focus=true>
								<view>
									<textarea v-model="commentAnswer" id="commentTextarea"
										:placeholder="'回复@'+comment.nickName" maxlength="255"></textarea>
								</view>
								<view>
									<u-button type="primary" @click="sendAnswer(comment.commentId,comment.nickName,comment.userid)" text="发送">
									</u-button>
								</view>
							</u-popup>
						</view>

						<!-- 评论点赞&回复 -->
						<view class="commentInfo" style="margin-top:5px;border-bottom: 1px solid aliceblue;">
							<view class="time"><text>{{comment.commentTime}}</text></view>
							<view class="support">
								<u-icon :firstClick=comment.firstClick :name=comment.supportIcon
									@click="comment.supportIcon='thumb-up-fill';commentSupport(comment.commentId,comment.firstClick,index,comment.userid)"
									:label=comment.supportCount>
								</u-icon>
							</view>
							<view class="comment">
								<u-icon name='chat' :label=comment.answerCount></u-icon>
							</view>
						</view>

						<!-- 评论的回复 -->
						<view>
							<u-read-more v-if="comment.answerCount>0" showHeight="0rpx" :shadowStyle="shadowStyle"
								color="black" toggle closeText="展开评论" @open="getAnswerById(comment.commentId)">
								<view class="answer" v-for="dfc in comment.answerDataForComment" :key="dfc.answerId">
									<view @click="dfc.popupShow=true">
										<u--text :text=dfc.ownNickName type="dark" bold size="14"></u--text>
										<view class="answer-text">
											<span class="content">{{dfc.answerText}}</span>
										</view>
										<view class="time"><text>{{dfc.answerTime}}</text></view>
									</view>
									<!-- 回复的回复框 -->
									<view class="answerPopup">
										<u-popup :show="dfc.popupShow" :round="5" @close="dfc.popupShow=false"
											@open="open" focus=true>
											<view>
												<textarea v-model="answerContent" id="commentTextarea"
													:placeholder="'回复@'+dfc.ownNickName" maxlength="255"></textarea>
											</view>
											<view>
												<u-button type="primary"
													@click="sendAnswer(dfc.answerId,comment.commentId,dfc.ownNickName,dfc.userId);dfa.popupShow=false"
													text="发送">
												</u-button>
											</view>
										</u-popup>
									</view>

								</view>
								<view class="answer" v-for="(dfa,answerId) in comment.answerDataForAnswer"
									:key=answerId>
									<view @click="dfa.popupShow=true">
										<u--text :text=dfa.ownNickName type="dark" bold size="14"></u--text>
										<view class="answer-text">回复
											<span class="name">@{{dfa.targetNickName}}</span>:<span
												v-html="'\u00a0'"></span>
											<span class="content">{{dfa.answerText}}</span>
										</view>
										<view class="time"><text>{{dfa.answerTime}}</text></view>
									</view>
									<!-- 回复的回复框 -->
									<view class="answerPopup">
										<u-popup :show="dfa.popupShow" :round="5" @close="dfa.popupShow=false"
											@open="open" focus=true>
											<view @click="dfa.popupShow=true">
												<textarea id="commentTextarea" :placeholder="'回复@'+dfa.ownNickName"
													maxlength="255"></textarea>
											</view>
											<view>
												<u-button type="primary"
													@click="sendAnswer(dfa.answerId,comment.commentId,dfa.ownNickName,dfa.userId);dfa.popupShow=false" text="发送">
												</u-button>
											</view>
										</u-popup>
									</view>
								</view>
							</u-read-more>
						</view>
						<view class="answerPopup">
							<!-- 帖子的评论框 -->
							<u-popup :show="popup.show" :round="5" @close="close" @open="open" focus=true>
								<view>
									<textarea v-model="postComment" id="commentTextarea"
										:placeholder="'评论帖子@'+postData.nickname" maxlength="255"></textarea>
								</view>
								<view>
									<u-button type="primary" @click="sendComment(postData.postId)" text="发送">
									</u-button>
								</view>
							</u-popup>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 下方评论框 -->
		<view class="commentSend">
			<view class="commentText" @click="popup.show=true">
				<input placeholder="评论..." disabled=true></input>
			</view>
			<view class="gap"></view>
			<view class="commentButton">
				<u-icon :firstClick=postData.firstClick :name=postData.supportIcon size=25 :id=postData.postId
					@click="support"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				albumWidth: 0,
				userId: 0,
				nickName: '',
				deleteShow: false,
				popup: {
					show: false,
				},
				postComment: '',
				commentAnswer: '',
				answerContent: '',
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "10rpx"
				},
				postData: { //帖子本体数据
					userId: 0,
					nickname: '王二',
					postTitle: '帖子标题',
					postId: 1,
					postTime: '2022-7-26 13:24',
					supportCount: 1,
					supportIcon: 'thumb-up',
					firstClick: true,
					commentCount: 0,
					avatar: '222',
					urls2: [],
				},
				//评论区数据
				commentData: [{
					userid: 0,
					commentId: 1121,
					commentTime: '2022-7-26 19:34',
					nickName: 'iii',
					content: '',
					supportCount: 0,
					supportIcon: 'thumb-up',
					firstClick: true,
					answerCount: 4,
					showList: false,
					popupShow: false,
					avatar: '/static/logo.png',
					answerDataForComment: [{
						answerId: 452,
						ownNickName: '黄巢',
						answerTime: '2022年8月15日15:20:45',
						answerText: '待到秋来九月八，我花开后百花杀',
						userId: 0,
						popupShow: false,
					}, {
						answerId: 1221,
						ownNickName: '刘路',
						answerTime: '2022年8月15日15:30:25',
						answerText: '队长，皇军托我给您带句话',
						userId: 0,
						popupShow: false,
					}, ],
					answerDataForAnswer: [{
						answerId: 55254,
						ownNickName: '李世民',
						targetNickName: '黄巢',
						answerTime: '2022年8月15日15:22:31',
						answerText: '天行有常，不为尧存，不为桀亡',
						userId: 0,
						popupShow: false,
					}, {
						answerId: 754,
						ownNickName: '李俨',
						targetNickName: '李世民',
						answerTime: '2022年8月15日15:24:29',
						answerText: '祖宗说得对',
						userId: 0,
						popupShow: false,
					}, ]
				}, ],

			}
		},
		onLoad() {
			this.getUserInfo()
			this.getPostDataById()
			this.getCommentDataById()
			console.log(111)
		},
		methods: {
			open() {
				
			},
			close() {
				this.popup.show = false
			},
			getUserInfo() {
				this.userId = this.$userId
				this.nickName = this.$nickName
			},
			async getPostDataById() { //获取帖子信息
				this.postData.postId = this.$postId
				console.log("帖子id：", this.postData.postId)
				await this.$request({
					url: '/xboot/post/getPostById',
					method: 'POST',
					data: {
						id: parseInt(this.postData.postId),
						dif: 2
					}
				}).then((res) => {
					console.log("帖子详情:", res)
					this.postData.userId = res.data.result[0].userId
					this.postData.postTitle = res.data.result[0].postTitle
					this.postData.postContent = res.data.result[0].postContent
					this.postData.partName = res.data.result[0].postPart
					this.postData.postTime = res.data.result[0].createTime
					this.postData.supportCount = res.data.result[0].supportCount
					this.postData.commentCount = res.data.result[0].commentCount
					this.postData.nickname = res.data.result[0].nickName
					this.postData.avatar = res.data.result[0].avatar
					this.postData.urls2[0] = res.data.result[0].postPicture
				})
				this.userRightsJudge()
			},

			async getCommentDataById() { //获取评论信息
				await this.$request({
					url: '/xboot/comment/getComment',
					method: 'POST',
					data: {
						postId: this.postData.postId
					}
				}).then((res) => {
					console.log("评论:", res)
					let d = res.data.result
					var comment = {}
					this.commentData = []
					// console.log("评论数量:", res.data.result.length)
					for (let i = 0; i < res.data.result.length; i += 2) {
						comment = {
							userid: d[i].commentUserId,
							commentId: d[i].id,
							commentTime: d[i].createTime,
							supportCount: d[i].commentSupportCount,
							answerCount: d[i].commentAnswerCount,
							nickName: d[i].nickName,
							content: d[i].commentContent,
							avatar: d[i + 1].avatar,
							urls2: [d[i].postPicture],
							supportIcon: 'thumb-up',
							firstClick: true,
							showList: false,
							popupShow: false,
							answerDataForAnswer: [],
							answerDataForComment: []
						}
						this.commentData.push(comment)
					}
					console.log("id:", this.commentData[0].commentId)
				})

			},
			async getAnswerById(id) { //获取回复信息
				await this.$request({
					url: '/xboot/comment/getAnswer',
					method: 'GET',
					data: {
						commentId: id
					}
				}).then((res) => {
					console.log("回复数据:", res)
					let p = -1
					for (let v = 0; v < this.commentData.length; v++) {
						if (this.commentData[v].commentId == id) {
							p = v
							console.log("对应帖子：", p)
							break
						}
					}
					let d = res.data.result
					var answer = {}
					this.commentData[p].answerDataForAnswer = []
					this.commentData[p].answerDataForComment = []
					for (let i = 0; i < d.length; i++) {
						if (d[i].targetAnswerId == null || d[i].targetAnswerId == 0) {
							answer = {
								popupShow: false,
								answerId: d[i].id,
								ownNickName: d[i].nickName,
								answerTime: d[i].createTime,
								answerText: d[i].answerContent,
								userId: d[i].answerUserId
							}
							this.commentData[p].answerDataForComment.push(answer)
						} else {
							answer = {
								popupShow: false,
								answerId: d[i].id,
								ownNickName: d[i].nickName,
								answerTime: d[i].createTime,
								answerText: d[i].answerContent,
								userId: d[i].answerUserId,
								targetNickName: d[i].targetNickName
							}
							this.commentData[p].answerDataForAnswer.push(answer)
						}
					}
					console.log("id:", this.commentData[0].commentId)
				})

			},

			async support(id) { //点赞帖子
				/* 逻辑:
					获取帖子/评论的id,根据id发送请求去后端查找,将id对应帖子的点赞数+1
				*/
				let userid = this.$userId
				let nickname = this.$nickName
				if (this.postData.firstClick) {
					this.postData.firstClick = false
					this.postData.supportIcon = 'thumb-up-fill'
					this.postData.supportCount++
				}
				await this.$request({
					url: '/xboot/support/support',
					data: {
						dif: 1,
						nickName: nickname,
						postId: this.postData.postId,
						postUserId: this.postData.userId,
						supportUserId: userid,

					}
				})

			},
			async commentSupport(id, first, index, commentUserId) { //点赞评论
				if (first) { //只能点赞一次，不可取消
					this.commentData[index].firstClick = false
					this.commentData[index].supportCount++;
					console.log("评论点赞成功")
				}
				await this.$request({
					url: '/xboot/support/support',
					data: {
						commentId: id,
						commentUserId: commentUserId,
						dif: 2,
						nickName: nickname,
						postId: this.postData.postId,
						postUserId: this.postData.userId,
						supportUserId: userid,
					}
				})
			},
			async sendComment(id) { //评论帖子
				await this.$request({
					url: '/xboot/comment/sendComment',
					method: 'POST',
					data: {
						postId: this.postData.postId,
						postUserId: this.postData.userId,
						commentContent: this.postComment,
						commentUserId: parseInt(this.userId),
						nickName: this.nickName
					}
				})
			},
			async answerComment(id,targetNickName,targetUserId) { //回复评论
				await this.$request({
					url: '/xboot/answer/sendAnswer',
					method: 'POST',
					data: {
						answerContent: this.commentAnswer,
						answerUserId: this.userId,
						commentId: id,
						nickName: this.nickName,
						postId: this.postData.postId,
						targetUserId: targetUserId,
						targetAnswerId:0,
						targetNickName:targetNickName
					}
				})


			},

			async sendAnswer(id, commentId,targetNickName,targetUserId) { //回复回复

				await this.$request({
					url: '/xboot/answer/sendAnswer',
					method: 'POST',
					data: {
						answerContent: this.commentAnswer,
						answerUserId: this.userId,
						commentId: commentId,
						nickName: this.nickName,
						postId: this.postData.postId,
						targetUserId: targetUserId,
						targetAnswerId: id,
						targetNickName:targetNickName
					}
				})
				this.popup.show = false
			},
			userRightsJudge() { //判断用户是否为发帖人,若为发帖人则显示删除按钮
				let id = this.$userId
				console.log("用户id：", id, "帖子主人id：", this.postData.userId)
				if (id == this.postData.userId) {
					this.deleteShow = true
				} else {
					this.deleteShow = false
				}
			},
			deletePost(e) { //删除帖子
				uni.showModal({
					content: '确认删除？',
					success: (res) => {
						if (res.confirm) {
							this.$request({
								url: '/xboot/post/delPostById',
								method: 'POST',
								data: {
									id: this.postData.postId
								}
							})
							console.log("帖子删除成功")
							uni.switchTab({
								url: '/pages/index/index'
							})
						} else {
							console.log("取消删除")
						}
					}
				})
			},

		}
	}
</script>

<style lang="scss">
	.main {
		margin: 10px;
	}

	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5px;
			border-radius: 3px;

		}

		&__content {
			margin-left: 10px;

			flex: 1;
		}
	}

	.postInfo {
		//帖子部分
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		font-size: 10px;
		color: grey;

		.time {
			flex: 7;
		}

		.support {
			flex: 1;
		}

		.comment {
			flex: 1;
		}
	}

	.commentArea {
		//评论区
		margin-bottom: 0px;
		padding-bottom: 15px;

		.commentInfo {
			display: flex;
			flex-direction: row;
			margin-top: 20px;
			font-size: 10px;
			color: grey;

			.time {
				flex: 7;
			}

			.support {
				flex: 1;
			}

			.comment {
				flex: 1;
			}
		}

		.answer {
			margin-top: 10rpx;
			margin-left: 32px;
			border-bottom: 1px solid aliceblue;

			.answer-text {
				font-size: 14px;
				font-family: 微软雅黑;

				.name {
					color: cornflowerblue;
				}

			}

			.time {
				margin-top: 5px;
				font-size: 10px;
				color: silver;
			}
		}


	}

	.answerPopup {
		//评论弹窗
		border-radius: 5px;

		.answerText {
			font-style: initial;
			margin-right: 10px;
			float: right;
		}

		#commentTextarea {
			width: auto;
			margin: 3px 3px 3px 3px;
			border: 1px solid whitesmoke;
			border-radius: 5px;
			padding: 5px;
		}

		#commentTextarea:hover {
			border: 2px solid mistyrose;
		}
	}

	.commentSend {
		//下方评论框
		position: fixed;
		bottom: 0px;
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: white;

		.commentText {
			margin-bottom: 5px;
			width: 70%;
			flex: 14;
			background-color: white;

			input {
				width: 100%;
				border: 1px solid whitesmoke;
				border-radius: 5px;
				margin-left: 10px;
			}
		}

		.gap {
			flex: 0.8;
			margin-bottom: 5px;
		}

		.commentButton {
			margin-bottom: 5px;
			width: 100%;
			flex: 1.5;
		}
	}
</style>
