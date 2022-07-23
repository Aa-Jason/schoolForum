<!-- 跳蚤市场主页面 -->
<template>
	<view class="trade">
		<view class="menu">
			<u-scroll-list @right="right" @left="left">
			        <view class="scroll-list" style="flex-direction: row;">
			            <view
			                    class="scroll-list__goods-item"
			                    v-for="(item, index) in list"
			                    :key="index"
			                    :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']"
			            >
			                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
			                <text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
			            </view>
			            <view class="scroll-list__show-more">
			                <text class="scroll-list__show-more__text">查看更多</text>
			                <u-icon name="arrow-leftward" color="#f56c6c" size="12"></u-icon>
			            </view>
			        </view>
			    </u-scroll-list>
		</view>
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
		            ></u--text>
		            <u--text
		              margin="0 0 8px 0"
		              text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
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
		                albumWidth: 0,
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
						list: [{
										price: '230.5',
						                thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
									}, {
										price: '74.1',
						                thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
									}, {
										price: '8457',
						                thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg'
									}, {
										price: '1442',
						                thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg'
									}, {
										price: '541',
						                thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
									}, {
										price: '234',
						                thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg'
									}, {
										price: '562',
						                thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg'
									}, {
										price: '251.5',
						                thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
									}]
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
