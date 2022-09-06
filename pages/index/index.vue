<template>
	<view class="content">
		<u-sticky offset-top="0">
			<view class="head">
				<view class="search">
					<view class="search-bar"><u-search placeholder="请输入要搜索的内容..." v-model="search.keyword" :clearabled="true" bg-color="white"
						:focus="true" :showAction="false" /></view>
						<view class="search-button" @click="searchByKeyword(search.keyword)">搜索</view>
						
				</view>
				<view class="tab">
					<view class="u-demo-block">
						<view class="u-demo-block__content">
							<u-tabs :list="tabList" lineWidth="30" @click=click lineColor="#f56c6c" :activeStyle="{
										color: '#303133',
										fontWeight: 'bold',
										transform: 'scale(1.05)'
									}" :inactiveStyle="{
										color: '#606266',
										transform: 'scale(1)'
									}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
							</u-tabs>
						</view>
					</view>
				</view>
			</view>
		</u-sticky>
		<u-notify ref="uNotify" :show="show"></u-notify>
		<view class="postArea">
			<PostCard class="post" :postData=postData />
		</view>
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
	const lineBg =
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
	export default {
		mixins: [uni.$u.mixin],
		components: {
			PostCard,
		},
		data() {
			return {
				lineBg,
				tabList: [{
					name: '首页',
					part: 1,
					badge: {
						isDot: false,

					}
				}, {
					name: '恋爱交友',
					part: 2,
				}, {
					name: '求助答疑',
					part: 3,
				}, {
					name: '求职招聘',
					part: 4,
				}, {
					name: '瓜田趣事',
					part: 5,
				}],

				scrollTop: 0,
				mode: 'circle',
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},
				show: true,
				list: [

				],
				search: {
					keyword: '',
				},
				part: 1,
				pageindex: 1,
				postData: [{
					postTitle: '帖子标题',
					postId: 1,
					postContent: '全体起立！从现在开始，这里就是卢本伟广场！',
					partName: '求助答疑',
					postTime: '2022-7-26 13:24',
					supportCount: 1,
					commentCount: 0,
					nickname: '卢本伟',
					avatar: '/static/avator.jpg',
					urls2: [
						'https://cdn.uviewui.com/uview/album/1.jpg',
						'https://cdn.uviewui.com/uview/album/2.jpg',
						'https://cdn.uviewui.com/uview/album/3.jpg',
						'https://cdn.uviewui.com/uview/album/4.jpg',
						'https://cdn.uviewui.com/uview/album/5.jpg',
						'https://cdn.uviewui.com/uview/album/6.jpg',
					],
				}, ],
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			click(item) {
				console.log('分区:', item.part, item.name);
				this.part = item.part
				console.log("当前分区为：", this.part)
				this.getNewPost(0)
			},
			async searchByKeyword(e) {
				await this.$request({
					url:'/xboot/post/getPostByKey',
					method:'POST',
					data:{
						key:e,
					}
				}).then((res)=>{
					console.log(res)
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
				console.log("搜索结果",res.data)
				console.log("搜索成功",e)
			},

			async getNewPost(e) {
				let page = this.pageindex
				this.pageindex = this.pageindex + e
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
			}
		},
		onLoad() {
			this.getNewPost(0)
		},
		onPullDownRefresh() {

			this.getNewPost(0)
			console.log("爬取新帖子")
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
			this.getNewPost(1)
			console.log("加载更多内容")
			uni.showToast({
				title: '加载成功',
				icon: 'success'
			})
		},

	}
</script>

<style lang="scss">
	.u-demo-block {
		padding-top: 5px;

	}

	.content {
		align-items: center;
		justify-content: center;
	}

	.post {
		margin: 5px;
	}

	.head {
		margin-top: 0;
		height: 75px;
		background-color: $u-bg-color;

		margin-bottom: 5px;
		border-bottom: 1px;
	}

	.search {
		z-index: 100;
		width: 90%;
		padding-top: 3px;
		margin-left: 20px;
		margin-right: 10px;
		display: flex;
		flex-direction: row;
		.search-bar{
			flex:9
		}
		.search-button{
			flex:1;
			width: 80px;
			height: 40px;
			font-size:15px;
			color: skyblue;
			text-align: right;
			line-height: 35px;
		}
		
	}

	.tab {
		z-index: 100;
	}

	.divider {
		margin-top: 100px;
	}
</style>
