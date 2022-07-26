<!-- 跳蚤市场主页面 -->
<template>
	<view class="trade">
		<u-sticky offset-top="0">
			
		</u-sticky>

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
				
					
			
			}
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
		},

		methods: {
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			toPost() { //点击跳转至帖子详情页
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			},
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>

<style lang="scss">
	.post {
		margin: 5px;
		padding-bottom: 10px;
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
