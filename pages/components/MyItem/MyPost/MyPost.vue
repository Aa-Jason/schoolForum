<template>
	<view>
		<view class="">
			<uni-card title="帖子标题" @click="switchToPost()">
				<view class="card-actions-time">
					<text>2022-7-30 16:25</text>
				</view>
				<text class="">{{postText}}</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">{{starNum}}</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">{{commitNum}}</text>
					</view>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					postText:"帖子内容",
					starNum:"0",
					commitNum:"0",
			}
		},
		methods: {
			onClick(e) {
				console.log(e)
			},
			switchToPost(){
				//测试
				uni.navigateTo({
					url:"/pages/components/PostArea/Post/Post"
				})
			}
		}
	}
</script>

<style lang="scss">
	.card-actions {
		display: flex;
		// flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-top: 1px #eee solid;
	}
	

	.card-actions-item{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card-actions-item{
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}
</style>
