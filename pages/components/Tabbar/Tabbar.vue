<template>
	<!-- 底部导航栏 -->
	<view class="u-page">
		<view class="u-page__item">

			<u-tabbar :value="value4" @change="name => value4 = name" :fixed="false" :placeholder="false"
				activeColor="#d81e06" :safeAreaInsetBottom="false">
				<u-tabbar-item text="首页" icon="home-fill"></u-tabbar-item>
				<u-tabbar-item text="跳蚤市场" icon="photo"></u-tabbar-item>
				<u-tabbar-item text="消息" icon="chat-fill"></u-tabbar-item>
				<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
			</u-tabbar>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		data() {
			return {
				value1: 0,
				value2: 1,
				value3: 'play-right',
				value4: 0,
				value5: 0,
				value6: 0,
				value7: 3
			}
		},
		onLoad() {

		},
		methods: {
			change5(name) {
				if (name === 1) return uni.$u.toast('请您先登录')
				else this.value5 = name
			},
			change1(e) {
				this.value1 = e
				console.log('change1', e);
			},
			click1(e) {
				console.log('click1', e);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.u-page {
		padding: 0;
		&__item {
			
			&__title {
				color: $u-tips-color;
				background-color: $u-bg-color;
				padding: 15px;
				font-size: 15px;

				&__slot-title {
					color: $u-primary;
					font-size: 14px;
				}
			}

			&__slot-icon {
				width: 17px;
				height: 17px;
			}
		}
	}
</style>
