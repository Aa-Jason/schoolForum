<template>
	<view>
		<view class="">
			<view class="cellsetting">
			<u-cell-group>
				<u-cell icon="/static/info/点赞.svg" title="点赞" @click="toSupportPage" size="large" isLink url=""></u-cell>
				<u-cell icon="/static/info/评论.svg" title="评论&回复" @click="toAnswerPage" value="" size="large" isLink url=""></u-cell>
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