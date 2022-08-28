<template>
	<view>
		<u--textarea v-model="AdviceText" placeholder="请提出你的宝贵建议"></u--textarea>
		<u-button text="提交" type="primary" @click="getAdvice()"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				AdviceText: ''
			};
		},
		methods:{
			 getAdvice() { //获取建议
				const res = this.$request({
					url: '',
					method: "POST",
					data: {
						AdviceText:this.AdviceText,
					},
				})
				uni.showModal({
					"title":"提交成功！",
				})
				uni.switchTab({
					url:"/pages/components/MyItem/MyItem"
				})
			},
			
		}
	}
</script>

<style lang="scss">

</style>
