<!-- 跳蚤市场主页面 -->
<template>
	<view class="trade">
		<u-sticky offset-top="0">
			<view class="tap">
				<view class="Label">
					<view class="label-item">
						<u--image :showLoading="true" src="/static/trade/运动相机.png" width="36px" height="36px"
							@click="click(6)"></u--image>
						<view class="text-item">
							<text>手机数码</text>
						</view>
					</view>
					<view class="label-item">
						<u--image :showLoading="true" src="/static/trade/运动器具.png" width="36px" height="36px"
							@click="click(7)"></u--image>
						<view class="text-item">
							<text>运动户外</text>
						</view>
					</view>
					<view class="label-item">
						<u--image :showLoading="true" src="/static/trade/衣物.png" width="36px" height="36px"
							@click="click(8)"></u--image>
						<view class="text-item">
							<text>衣物饰品</text>
						</view>
					</view>
					<view class="label-item">
						<u--image :showLoading="true" src="/static/trade/生活用品.png" width="36px" height="36px"
							@click="click(9)"></u--image>
						<view class="text-item">
							<text>生活用品</text>
						</view>
					</view>
					<view class="label-item">
						<u--image :showLoading="true" src="/static/trade/图书馆.png" width="36px" height="36px"
							@click="click(10)"></u--image>
						<view class="text-item">
							<text>文具书籍</text>
						</view>
					</view>
				</view>
				<u-divider text=""></u-divider>
			</view>
		</u-sticky>
		<u-notify ref="uNotify" :show="show"></u-notify>
		<view class="postArea">
			<PostCard class="post" :postData=postData />
		</view>
		<!-- 回到顶部按钮 -->
		<view class="wrap">
			<u-back-top :scrollTop="scrollTop" :mode="mode" :iconStyle="iconStyle"></u-back-top>
		</view>

		<view class="divider">
			<u-divider text="没有更多内容了"></u-divider>
		</view>

	</view>
</template>
<script>
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	export default {
		name: 'Trade',
		components: {
			PostCard,
		},

		data() {
			return {
				show: true,
				scrollTop: 0,
				mode: 'circle',
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},
				part: 6,
				pageindex: 1,
				postData: [{
					postTitle: '虚空冠军',
					postId: '265',
					postContent: '乌兹在哪里，乌兹进场了，乌兹还在输出，乌兹倒下了',
					postPart: '2',
					partName: '恋爱交友',
					postTime: '2022-7-27 13:29',
					supportCount: 6,
					commentCount: 3,
					nickname: '简自豪',
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
					],
				}]
			}
		},

		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			async getNewPost(e) {
				let page = this.pageindex
				this.pageindex = this.pageindex + e
				// console.log("页码:", this.pageindex)
				await this.$request({
					url: '/xboot/post/getPostInfo',
					method: 'POST',
					data: {
						page: this.pageindex.toString(),
						part: this.part.toString()
					}
				}).then((res) => {
					let d = res.data.result
					var post = {}
					this.postData = []
					for (let i = 0; i < res.data.result.length; i++) {
						post = {
							postTitle: d[i].postTitle,
							postId: d[i].id,
							postContent: d[i].postContent,
							partName: d[i].postPart,
							postTime: d[i].createTime,
							supportCount: d[i].supportCount,
							commentCount: d[i].commentCount,
							nickname: d[i].nickName,
							avatar: d[i].avatar,
							urls2: [d[i].postPicture]
						}
						this.postData.push(post)
					}
				})
			},
			toPost() { //点击跳转至帖子详情页
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			},
			click(e) {
				this.part = e
				console.log("分区：", this.part)
				this.getNewPost(0)
			}
		},
		onLoad() {
			this.getNewPost(0)
		},
		onPullDownRefresh() {
			console.log("爬取新帖子")
			this.getNewPost(0)
			uni.stopPullDownRefresh()
			this.$refs.uNotify.show({
				top: 120,
				type: 'primary',
				message: '刷新成功',
				duration: 1000,
				fontSize: 10,
			 safeAreaInsetTop: true
			})
		},
		onReachBottom() {
			console.log("加载更多内容")
			this.getNewPost(1)
			uni.showToast({
				title: '加载成功',
				icon: 'success'
			})
		},
	}
</script>

<style lang="scss">
	.post {
		margin: 5px;
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
