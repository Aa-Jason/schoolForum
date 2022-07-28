<template>
	<view class="main">
		<u-sticky offset-top="0">
			<view class="head">
				<view class="search">
					<u-search placeholder="请输入要搜索的内容..." v-model="search.keyword" :clearabled="true"
						bg-color="white"  :focus="true" :custom="searchByKeyword()" />
				</view>
				<view class="tab">
					<TabTop />
				</view>
			</view>
		</u-sticky>
		
		
		<!-- 帖子区域 -->
		<view class="postArea">
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
			<PostCard class="post" :postData=postData />
		</view>
			
		<view class="divider" >	
			<u-divider text="没有更多内容了"></u-divider>
		</view>
		
		<!-- 发帖按钮 -->
		<view class="buoy">
			<Post-Buoy />
		</view>
	</view>

</template>

<script>
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	import TabTop from "@/pages/components/Tab/tab"
	import PostBuoy from "@/pages/components/PostArea/PostBuoy.vue"

	export default {
		name: "MainPage",
		components: {
			TabTop,
			PostBuoy,
			PostCard
		},
		data() {
			return {
				postData:{
					postTitle:'帖子标题',
					postId:'1',
					postContent:'全体起立！从现在开始，这里就是卢本伟广场！',
					postPart:'3',
					partName:'求助答疑',
					postTime: '2022-7-26 13:24',
					pageindex:1,
					supportCount: 1,
					commentCount:0,
					nickname:'卢本伟',
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
				list:[
					
				],
				search: {
					keyword: '',
				},
			}
		},
		onLoad() {//加载帖子
			uni.request({
				
			})
		},
		onReachBottom() {
			console.log("页面触底")
		
		},
		methods: {
			getPostData(){//获取帖子数据
				const res = this.$myRequest({
					url: '/pages/getPostData?pageindex='+this.pageindex,
					method:"POST",
					data:{
						postData:JSON.stringify(postData)
					},
				})
					this.postData=res.data
			},
			searchByKeyword(e) {
				console.log("搜索成功")
				// uni.request({
				// 	method:"GET",
				// 	url:"http://localhost:8888/pages/search",
				// 	data:{
				// 		keyword:JSON.stringify(this.keyword)
				// 	},
				// 	success: res => {
				// 		uni.reLaunch({
				// 			url: "/pages/index/index"
				// 		})
				// 	},
				// 	fail: () => {
				// 		console.log('err', err)
				// 		uni.showToast({
				// 			title: "网络连接错误，请稍后再试！",
				// 			icon: "error"
				// 		});
				// 	},
				// 	complete: () => {}
				// }).catch(err => {
				// 		wx.showModal({
				// 			title: `提示`,
				// 			content: `未填写信息`,
				// 			showCancel: false
				// 		});
				// 		console.log('err', err);
				// 	})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 主体 */
	.main {
		margin-top: 0px;
		width: 100%;
		height: 100%;
		
	}

	/* 导航栏与搜索框 */
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
	
	//帖子区域
	.post{
		margin: 5px;
		padding-bottom: 10px;
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
	
	.divider{
		margin-top: 100px;
	}
</style>
