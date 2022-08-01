<template>
	<view>
		<u--textarea v-model="value1" placeholder="请提出你的宝贵建议" ></u--textarea>
		<u-button text="提交" type="primary"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: ''
			};
		}
	}
</script>

<style lang="scss">

</style>
