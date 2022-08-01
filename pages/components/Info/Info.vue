<template>
	<view>
		<view class="">
			<view class="cellsetting">
			<u-cell-group>
				<u-cell icon="integral-fill" title="点赞" @click="toSupportPage" size="large" isLink url=""></u-cell>
				<u-cell icon="integral-fill" title="评论&回复" @click="toAnswerPage" value="" size="large" isLink url=""></u-cell>
			</u-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toAnswerPage(){
				uni.navigateTo({
					url: '/pages/components/Info/Answer/Answer'
				})
			},
			toSupportPage(){
				uni.navigateTo({
					url: '/pages/components/Info/Support/Support'
				})
			}
		}
		
	}
</script>

<style>
</style>