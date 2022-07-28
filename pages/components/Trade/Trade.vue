<!-- 跳蚤市场主页面 -->
<template>
	<view class="trade">
		<u-sticky offset-top="0">
					<view class="tap">
						<view class="Label">
							<view class="label-item">
								<u--image :showLoading="true" src="/static/trade/mobile.png" width="36px" height="36px"
									@click="click"></u--image>
								<view class="text-item">
									<text>手机数码</text>
								</view>
							</view>
							<view class="label-item">
								<u--image :showLoading="true" src="/static/trade/sports.png" width="36px" height="36px"
									@click="click"></u--image>
								<view class="text-item">
									<text>运动户外</text>
								</view>
							</view>
							<view class="label-item">
								<u--image :showLoading="true" src="/static/trade/clothes.png" width="36px" height="36px"
									@click="click"></u--image>
								<view class="text-item">
									<text>衣物饰品</text>
								</view>
							</view>
							<view class="label-item">
								<u--image :showLoading="true" src="/static/trade/life.png" width="36px" height="36px"
									@click="click"></u--image>
								<view class="text-item">
									<text>生活用品</text>
								</view>
							</view>
							<view class="label-item">
								<u--image :showLoading="true" src="/static/trade/book.png" width="36px" height="36px"
									@click="click"></u--image>
								<view class="text-item">
									<text>文具书籍</text>
								</view>
							</view>
						</view>
						<u-divider text=""></u-divider>
					</view>
				</u-sticky>

		<view class="postArea">
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
		</view>

		<view class="divider">
			<u-divider text="没有更多内容了"></u-divider>
		</view>

		<!-- 发帖按钮 -->
		<view class="buoy">
			<Post-Buoy />
		</view>
	</view>
</template>
<script>
	import PostBuoy from "@/pages/components/PostArea/PostBuoy.vue"
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	export default {
		name: 'Trade',
		components: {
			PostCard,
			PostBuoy
		},
		onPullDownRefresh() { //放前面
			console.log("触发下拉刷新")
			uni.stopPullDownRefresh()
		},
		data() {
			return {
				postData:{
					postTitle:'虚空冠军',
					postId:'1',
					postContent:'乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postPart:'2',
					partName:'恋爱交友',
					postTime: '2022-7-27 13:29',
					supportCount: 6,
					commentCount:3,
					nickname:'简自豪',
					avatar: '/static/avator.jpg',
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
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
		},

		methods: {
			getPostData(){//获取帖子数据
				const res = uni.request({
					url: '/pages/getPostData?pageindex='+this.pageindex,
					method:"POST",
					data:{
						postData:JSON.stringify(postData)
					},
				})
					this.postData=res.data.message
			},
			toPost() { //点击跳转至帖子详情页
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			},
			click() {
				console.log(0)
			}
		}
	}
</script>

<style lang="scss">
	.post {
		margin: 5px;
		padding-bottom: 10px;
	}
		.tap {
			background-color: white;
		}
	
		.Label {
	
			height: 45px;
			display: flex;
			flex-direction: row;
			margin-top: 10px;
			font-size: 10px;
			// font-family: 楷体;
			margin-left: 20px;
			.label-item {
				flex: 1;
			
				.text-item {
					position: relative;
					left: -5px;
				}
			}
		}
	.buoy {
		z-index: 100;
		border-radius: 25px;
		width: 50px;
		height: 50px;
		float: right;
		position: sticky;
		bottom: 100px;
		margin-top: 200px;
	}

	.divider {
		margin-top: 100px;
	}

	.u-demo-block {
		margin-top: 0;
		height: 85px;
		background-color: white;

		margin-bottom: 5px;
		border-bottom: 1px;
	}
</style>
