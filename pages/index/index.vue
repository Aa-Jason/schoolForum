<template>
	<view class="content">
		<!-- <view>
			<MainPage />
		</view> -->
		<u-sticky offset-top="0">
			<view class="head">
				<view class="search">
					<u-search placeholder="请输入要搜索的内容..." v-model="search.keyword" :clearabled="true" bg-color="white"
						:focus="true" :custom="searchByKeyword()" />
				</view>
				<view class="tab">
					<TabTop />
				</view>
			</view>
		</u-sticky>
		<u-notify ref="uNotify" :show="show"></u-notify>
		<view class="postArea">
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
		</view>
		
		<!-- 发帖按钮 -->
		<view class="buoy">
			<Post-Buoy />
		</view>
		
		<view class="divider">
			<u-divider text="没有更多内容了"></u-divider>
		</view>
		
		
	</view>
</template>

<script>
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	import PostBuoy from "@/pages/components/PostArea/PostBuoy.vue"
	import TabTop from "@/pages/components/Tab/tab"
	export default {
		components:{
			PostCard,
			PostBuoy,
			TabTop,
		},
		data() {
			return {
				show:true,
				list: [
				
				],
				search: {
					keyword: '',
				},
				postData: {
					postTitle: '帖子标题',
					postId: '1',
					postContent: '全体起立！从现在开始，这里就是卢本伟广场！',
					postPart: '3',
					partName: '求助答疑',
					postTime: '2022-7-26 13:24',
					pageindex: 1,
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
				},
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			console.log("爬取新帖子")
			uni.request({//加载新帖子
				
			})
			uni.stopPullDownRefresh()
			this.$refs.uNotify.show({
			            top: 120,
			            type: 'primary',
			            message: '刷新成功',
			            duration: 1000,
			            fontSize: 10,
			            safeAreaInsetTop:true
			        })
		},
		onReachBottom() {
			console.log("加载更多内容")
			alert("000")
		},
		methods: {
				searchByKeyword(e) {
					console.log("搜索成功")
					
				},
		}
	}
</script>

<style lang="scss">
	.content {
		align-items: center;
		justify-content: center;
	}
	
	.post {
		margin: 5px;
		padding-bottom: 10px;
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
		margin-right: 20px;
	}
	
	.tab {
		z-index: 100;
	}

	
	//发帖悬钮
	.buoy {
		z-index: 100;
		border-radius: 25rpx;
		width: 100rpx;
		height: 100rpx;
		float: right;
		position: sticky;
		bottom: 200rpx;
		margin-top: 200rpx;
	}
	.divider {
		margin-top: 100px;
	}
</style>
