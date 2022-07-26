<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__content">
				<view class="album">
					<view class="album__avatar" style="width: 32px;height: 32px;">
						<image src="/static/avator.jpg" mode="widthFix" style="width: 32px;height: 32px;"></image>
					</view>
					<view class="album__content">
						<u--text text="uView UI" type="primary" bold size="17"></u--text>
						<u--text margin="10px 0 8px 0" @click="toPost" class="postTitle" :text="postData.postTitle"></u--text>
						<u--text margin="0 0 8px 0" @click="toPost"  text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"></u--text>
						<u-album :urls="postData.urls2" multipleSize=50></u-album>
					<view class="postInfo">
						<view class="time"><text>发表时间: {{postData.postTime}}</text></view>
						<view class="support"><u-icon name="thumb-up" :label=postData.supportCount></u-icon></view>
						<view class="comment"><u-icon name="chat" :label=postData.commentCount></u-icon></view>
					</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				albumWidth: 0,
				postData:{
					postTitle:'帖子标题',
					postId:'1',
					postTime: '2022-7-26 13:24',
					supportCount: 1,
					commentCount:0,
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
				
				
			}
		},
		methods:{
			toPost(){//点击跳转至帖子详情页
				uni.$emit('getPostId',this.postData.postId)
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
	.postInfo{
		display: flex;
		flex-direction: row;
		margin-top:10px ;
		font-size: 10px;
		color:grey;
		.time{
			flex: 5;
			
		}
		.support{
			flex: 1;
		}
		.comment{
			flex: 1;
		}
	}
</style>
