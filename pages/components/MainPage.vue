<template>
	<view class="main">
		<u-sticky offset-top="0">
			<view class="head">
				<view class="search">
					<u-search placeholder="请输入要搜索的内容..." v-model="search.keyword" :clearabled="true"
						 :focus="true" :custom="serach" />
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
	import PostArea from "@/pages/components/PostArea/PostArea.vue"
	import PostCard from "@/pages/components/PostArea/PostCard.vue"
	import TabTop from "@/pages/components/Tab/tab"
	import PostBuoy from "@/pages/components/PostArea/PostBuoy.vue"

	export default {
		name: "MainPage",
		components: {
			PostArea,
			TabTop,
			PostBuoy,
			PostCard
		},
		data() {
			return {
				search: {
					keyword: '',
				},
			}
		},
		methods: {
			serach() {
				alert("搜索成功")
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
		height: 70px;
		background-color: $u-bg-color;

		margin-bottom: 5px;
		border-bottom: 1px;
	}
	.search {
		z-index: 100;
		width: 90%;
		margin: auto;
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
