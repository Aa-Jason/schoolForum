<template>
	<view>
		<u--textarea v-model="AdviceText" placeholder="请提出你的宝贵建议" confirmType='111'></u--textarea>
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
				const res = uni.$request({
					url: '',
					method: "POST",
					data: {
						AdviceText:'',
					},
				})
				this.AdviceText = res.data.AdviceText
			},
			
		}
	}
</script>

<style lang="scss">

</style>
