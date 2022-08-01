<!-- 帖子详情页 -->
<template>
	<view class="main">
		<view>
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<view class="album">
						<view class="album__avatar">
							<image src="/static/uview/common/logo.png" mode="" style="width: 32px;height: 32px;">
							</image>
						</view>
						<view class="album__content">
							<u--text text="昵称" type="primary" bold size="17"></u--text>
							<u--text margin="10px 0 8px 0" size=16 bold @click="toPost" :text="postData.postTitle">
							</u--text>
							<u--text margin="0 0 8px 0" text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
							<u-album :urls="postData.urls2" multipleSize=150rpx space="3"></u-album>

						</view>
					</view>
					<!-- 时间 点赞 评论 -->
					<view class="postInfo">
						<view class="time"><text>{{postData.postTime}}</text></view>
						<view class="support">
							<u-icon :firstClick=postData.firstClick :name=postData.supportIcon
								:label=postData.supportCount :id=postData.postId @click="support()"></u-icon>
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
		<view class="commentArea" v-for="(comment,index) in commentData" :key=index>
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<view class="album">
						<view class="album__avatar">
							<image src="/static/logo.png" mode="" style="width: 20px;height: 20px;"></image>
						</view>
						<view class="album__content">
							<u--text text="uView UI" type="dark" bold size="14"></u--text>
							<u--text margin="10px 0 8px 0" text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
						</view>
					</view>
					<view class="answerPopup">
						<!-- 评论点赞&回复 -->
						<view class="commentInfo" style="margin-top:5px ;">
							<view class="time"><text>{{comment.commentTime}}</text></view>
							<view class="support">
								<u-icon :firstClick=comment.firstClick :name=comment.supportIcon
									@click="commentSupport" :label=comment.supportCount :id=comment.commentId>
								</u-icon>
							</view>
							<view class="comment" @click="popup.show=true">
								<u-icon name='chat' :label=comment.answerCount></u-icon>
							</view>
						</view>

						<u-popup :show="popup.show" :round="5" @close="close" @open="open" focus=true>
							<view>
								<textarea id="commentTextarea" placeholder="输入评论,不超过255字" maxlength="255"></textarea>
							</view>
							<view>
								<u-button type="primary" @click="sendAnswer" text="发送"></u-button>
							</view>
						</u-popup>
					</view>
				</view>
			</view>
		</view>
	
		<!-- 发表评论 -->
		<view class="commentSend">
			<view class="commentText">
				<input placeholder="评论..." disabled=true @click="popup.show=true"></input>
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
				postData: {
					postTitle: '帖子标题',
					postId: '',
					postTime: '2022-7-26 13:24',
					supportCount: 1,
					supportIcon: 'thumb-up',
					firstClick: true,
					commentCount: 0,
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
				},
				commentData:[
					{
						commentId: '',
						commentTime: '2022-7-26 19:34',
						supportCount: 0,
						supportIcon: 'thumb-up',
						firstClick: true,
						answerCount: 1,
					},
				],
				popup: {
					show: false,
				},

			}
		},
		beforeCreate() {
			uni.$on("getPostId", postId => { //获取帖子ID
				this.postId = postId
				console.log("帖子ID：", this.postId)
			})
		},
		created() {
			this.getPostDataById()
		},
		mounted() {
			this.getCommentDataById()
		},
		methods: {
			open() {

			},
			close() {
				this.popup.show = false
			},

			async getPostDataById() { //获取帖子信息
				const res = await this.$request({
					url: '',
					method: 'POST',
					data: {
						postId: this.postId
					}
				})
				console.log(res.data)
			},

			async getCommentDataById() { //获取评论信息
				const res = await this.$request({
					url: '',
					method: 'POST',
					data: {
						postId: this.postId
					}
				})
				console.log(res.data)
			},

			support() { //点赞帖子
				/* 逻辑:
					获取帖子/评论的id,根据id发送请求去后端查找,将id对应帖子的点赞数+1
				*/
				if (this.postData.firstClick) {
					this.postData.firstClick = false
					this.postData.supportIcon = 'thumb-up-fill'
					this.postData.supportCount++
					console.log("点赞成功")
				}
				this.$request({
					url: '',
					data: {}
				})

			},
			commentSupport() {//点赞评论
				if (this.commentData.firstClick) {
					this.commentData.firstClick = false
					this.commentData.supportIcon = 'thumb-up-fill'
					this.commentData.supportCount++
					console.log("评论点赞成功")
				}
				this.$request({
					url: '',
					data: {}
				})
			},
			sendAnswer() {
				this.popup.show = false
			}
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
		margin-bottom: 15px;
		padding-bottom: 15px;
		border-bottom: 1px solid aliceblue;

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
		bottom: 5px;
		width: 100%;
		display: flex;
		flex-direction: row;

		.commentText {
			width: 70%;
			flex: 14;

			input {
				width: 100%;
				border: 1px solid whitesmoke;
				border-radius: 5px;
				margin-left: 10px;
			}
		}

		.gap {
			flex: 0.8;
		}

		.commentButton {
			width: 100%;
			flex: 1.5;
		}
	}
</style>
