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
							<u--text text="uView UI" type="primary" bold size="17"></u--text>
							<u--text margin="10px 0 8px 0" @click="toPost" :text="postTitle"></u--text>
							<u--text margin="0 0 8px 0" text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
							<u-album :urls="urls2" multipleSize=80></u-album>
						</view>
					</view>
				</view>
			</view>
		</view>

		<u-divider text="评论"></u-divider>

		<!-- 评论区 -->
		<view class="commentArea">
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
						<view class="answerText">
							<u-text @click="popup.show=true" style="text-align: center;" text="回复"></u-text>
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
		<view class="commentSend">
			<view class="commentText">
				<input placeholder="评论..." @click="popup.show=true" ></input>
			</view>
			<view class="commentButton">
				<button class="sendComment" size="mini">点赞</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				albumWidth: 0,
				postTitle: '帖子标题',
				popup: {
					show: false,
				},
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
			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.popup.show = false
				// console.log('close');
			},
			sendAnswer() {
				this.popup.show = false
			}
		}
	}
</script>

<style lang="scss">
	.main {
		margin: 5px 5px 5px 5px;
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

	.answerPopup {
		border-radius: 5px;
		.answerText{
			font-style:initial;
			margin-right:10px ;
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
		position: fixed;
		bottom: 5px;
		width: 100%;

		.commentText {
			width: 70%;

			float: left;

			input {
				width: 100%;
				border: 1px solid whitesmoke;
				border-radius: 5px;
				margin-left: 10px;
			}
		}

		.commentButton {
			width: 100%;

			button {
				background-color: cornflowerblue;
				color: white;
				float: right;
				margin-right: 10px;
				height: 24px;
				line-height: 24px;
			}

			button:hover {
				background-color: blueviolet;
				font-weight: bold;
			}
		}


	}
</style>
