<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<view class="album">
					<!-- 头像 -->
					<view class="album__avatar" style="width: 32px;height: 32px;">
						<image :src="postData.avatar" mode="widthFix" style="width: 32px;height: 32px;"></image>
					</view>
					<view class="album__content">
						<!-- 昵称、标题、帖子内容 -->
						<u--text :text="postData.nickname" type="primary" bold size="17"></u--text>
						<u--text margin="10px 0 8px 0" @click="toPost" bold size=16 class="postTitle"
							:text="postData.postTitle"></u--text>
						<u--text margin="0 0 8px 0" @click="toPost" :text="postData.postContent"></u--text>
						<u-album :urls="postData.urls2" multipleSize=120rpx space="3"></u-album>
						<!-- 分区展示 -->
						<view class="part"><u-tag :text=postData.partName plain size="mini" shape="circle" icon="tags-fill"></u-tag></view>
						<!-- 下方信息 -->
						<view class="postInfo">
							<view class="time"><text>发表时间: {{postData.postTime}}</text></view>
							<view class="support">
								<u-icon name="thumb-up" :label=postData.supportCount></u-icon>
							</view>
							<view class="comment">
								<u-icon name="chat" :label=postData.commentCount></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['postData'],
		data() {
			return {
				albumWidth: 0,
			}
		},
		methods: {
			toPost() { //点击跳转至帖子详情页
				uni.$emit('getPostId', this.postData.postId)
				console.log("跳转成功，帖子ID传入")
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			}
		}
	}
</script>

<style lang="scss">
	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 1px;
			border-radius: 3px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;

		}
	}

	.postTitle {
		margin: 10px 0 8px 0;
		
	}
	

	.part{//帖子分区显示
		margin-top: 5px;
		width: 25%;
		min-width: 90px;
	}
	
	.postInfo {
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		font-size: 10px;
		color: grey;

		.time {
			flex: 5;

		}

		.support {
			flex: 1;
		}

		.comment {
			flex: 1;
		}
	}
</style>
