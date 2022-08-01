<template>
	<view>
		<view class="img_background">
			<view class="image">
				<u-avatar :src="src" shape="circle" size="70px" @click=""></u-avatar>
			</view>
			<view class="text_po">
				<text >用户</text>
			</view>
			<view class="cell">
				<u-cell isLink :border="false" size="large" url="./changeUsername/changeUsername"></u-cell>
			</view>
		</view>
		<view class="cell_back">	
			<view class="cellsetting">
				<u-cell-group>
					<u-cell icon="integral-fill" title="个人信息" value="" size="large" isLink url="./identifyPage/identifyPage"></u-cell>
					<u-cell icon="integral-fill" title="我的帖子" value="" size="large" isLink url="./MyPost/MyPost"></u-cell>
					<u-cell icon="setting-fill" title="设置" value="" size="large" isLink url="./SettingPage/SettingPage"></u-cell>
					<u-cell icon="setting-fill" title="意见反馈" value="" size="large" isLink url="./advice/advice"></u-cell>
					<u-cell icon="setting-fill" title="关于我们" value="" size="large" isLink url="./informationPage/informationPage"></u-cell>
				</u-cell-group>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:  "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
				show: false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
		.img_background{
			height: 110px;
			background-color: azure;
			.image{
				position: relative;
				left: 10px;
				padding: 0;
				top: 20px;
				float: left;
				}
			.text_po{
				margin: 0 auto;
				padding: 0;
				position: relative;
				top: 45px;
				float: left;
				margin-left:30px;
			}
			.cell{
				padding: 0;
				position: relative;
				top: 35px;
			}
		}

		
		// .cellsetting{
		// 	padding: 0;
		// 	margin-top: 200px;
		// }
</style>
