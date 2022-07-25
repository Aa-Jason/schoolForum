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
			<PostCard class="post" />
			<PostCard class="post" />
			<PostCard class="post" />
			<PostCard class="post" />
			<PostCard class="post" />
			<PostCard class="post" />
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
		methods: {
			get(e){
				uni.request({
					url: 'http://localhost:8088/pages/get',
					method:"POST",
					data:{
						list
					},
					header:{
						'custom-header': 'get'
					},
					success: (res) => {
						console.log("成功")
						if(res.statusCode==204){
							// 解构的意义实际上是把res.data.access_token的值拿出来，赋值给一个变量access_token
							let {access_token} = res.data;
							uni.setStorageSync('token',access_token);
						}
						else{
							uni.showToast({
								title: '网络错误，加载失败',
								icon:'error'
							});
						}
					}
				})
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
		border-radius: 25px;
		width: 50px;
		height: 50px;
		float: right;
		position: sticky;
		bottom: 100px;
		margin-top: 200px;
	}
</style>
