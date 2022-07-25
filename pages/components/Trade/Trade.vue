<!-- 跳蚤市场主页面 -->
<template>
	<view class="trade">
		<view class="u-demo-block">
			<text class="u-demo-block__title"></text>
			<u-scroll-list :indicator="indicator">
				<view class="scroll-list">
					<view
						class="scroll-list__line"
						v-for="(item, index) in menuArr"
						:key="index"
					>
						<view
							class="scroll-list__line__item"
							v-for="(item1, index1) in item"
							:key="index1"
							:class="[(index1 === item.length - 1) && 'scroll-list__line__item--no-margin-right']"
						>
							<image
								class="scroll-list__line__item__image"
								:src="menuBaseUrl + item1.icon"
								mode=""
							></image>
							<text class="scroll-list__line__item__text">{{ item1.name }}</text>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<u-divider text=""></u-divider>
		<view class="u-page">
		    <view class="u-demo-block">
		      <view class="u-demo-block__content">
		        <view class="album">
		          <view class="album__avatar">
		            <image
		              src="/static/uview/common/logo.png"
		              mode=""
		              style="width: 32px;height: 32px;"
		            ></image>
		          </view>
		          <view class="album__content">
		            <u--text
		              text="uView UI"
		              type="primary"
		              bold
		              size="17"
					  @click="toPost"
		            ></u--text>
		            <u--text
		              margin="0 0 8px 0"
		              text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
					  @click="toPost"
		            ></u--text>
		            <u-album :urls="urls2"></u-album>
		          </view>
		        </view>
		      </view>
		    </view>
		  </view>
	</view>
</template>
<script>
	export default {
		name: 'Trade',
		onPullDownRefresh() {//放前面
			console.log("触发下拉刷新")
			uni.stopPullDownRefresh()
		},
		data() {
		            return {
						indicator: false,
		                albumWidth: 0,
						menuBaseUrl: 'https://cdn.uviewui.com/uview/menu/',
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
						
						menuArr: [
							[{
									name: '服饰配件',
									icon: '11.png'
								},
								{
									name: '生活百货',
									icon: '9.png'
								}, {
									name: '书籍资料',
									icon: '17.png'
								}, {
									name: '电子数码',
									icon: '6.png'
								}, {
									name: '出行工具',
									icon: '11.png'
								}, 
							],
							// [{
							// 		name: '充值中心',
							// 		icon: '8.png'
							// 	},
							// 	{
							// 		name: '机票酒店',
							// 		icon: '10.png'
							// 	}, {
							// 		name: '金币庄园',
							// 		icon: '18.png'
							// 	}, {
							// 		name: '阿里拍卖',
							// 		icon: '15.png'
							// 	}, {
							// 		name: '淘宝吃货',
							// 		icon: '16.png'
							// 	}, {
							// 		name: '闲鱼',
							// 		icon: '4.png'
							// 	}, {
							// 		name: '会员中心',
							// 		icon: '6.png'
							// 	}, {
							// 		name: '造点新货',
							// 		icon: '13.png'
							// 	}, {
							// 		name: '土货鲜食',
							// 		icon: '14.png'
							// 	}
							// ]
						]
		            }
		        },
		// onReachBottom() {
		// 	this.loadStatus = 'loading';
		// 	// 模拟数据加载
		// 	setTimeout(() => {
		// 		this.addRandomData();
		// 		this.loadStatus = 'loadmore';
		// 	}, 1000)
		// },
		
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
			toPost(){//点击跳转至帖子详情页
				uni.navigateTo({
					url: "/pages/components/PostArea/Post/Post"
				})
			}
		}
	}
</script>

<style lang="scss">
.scroll-list {
	@include flex(column);

	&__goods-item {
		margin-right: 20px;

		&__image {
			width: 60px;
			height: 60px;
			border-radius: 4px;
		}

		&__text {
			color: #f56c6c;
			text-align: center;
			font-size: 12px;
			margin-top: 5px;
		}
	}

	&__show-more {
		background-color: #fff0f0;
		border-radius: 3px;
		padding: 3px 6px;
		@include flex(column);
		align-items: center;

		&__text {
			font-size: 12px;
			width: 12px;
			color: #f56c6c;
			line-height: 16px;
		}
	}

	&__line {
		@include flex;
		margin-top: 10px;

		&__item {
			margin-right: 15px;

			&__image {
				width: 61px;
				height: 48px;
			}

			&__text {
				margin-top: 5px;
				color: $u-content-color;
				font-size: 12px;
				text-align: center;
			}

			&--no-margin-right {
				margin-right: 0;
			}
		}
	}
}
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
