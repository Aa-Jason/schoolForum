<template>
	<view>
			<view class="image">
				<u-avatar :src="src" shape="square" size="100px" @click="toSetting()"></u-avatar>
			</view>
			<h3>昵称</h3>
			
			<view class="cellsetting">
			<u-cell-group>
				<u-cell icon="integral-fill" title="个人资料" size="large" isLink url="./informationPage/informationPage"></u-cell>
				<u-cell icon="integral-fill" title="认证信息" value="" size="large" isLink url="./identifyPage/identifyPage"></u-cell>
				<u-cell icon="setting-fill" title="设置" value="" size="large" isLink url="./SettingPage/SettingPage"></u-cell>
			</u-cell-group>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:  '../../static/uniapp.png',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
		.image{
			position: relative;
			left: 135px;
			padding: 0;
			top: 80px;
		}
		h3{
			position: relative;
			text-align: center;
			padding: 0;
			top: 80px;
		}
		.cellsetting{
			padding: 0;
			margin-top: 200px;
		}
</style>
