<template>
	 <view class="">
			<u-cell
			    title="姓名"
			    :value=name
			></u-cell>
			<u-cell
			    title="学院"
			    :value=dept
			></u-cell>
			<u-cell
			    title="专业"
			    :value=major
			></u-cell>
	    </view>
</template>
	
<script>
	export default {
		data() {
			return {
				 name: 'wsx',
				 dept:'计算机学院',
				 major:'电子信息'	 
			};
		},
		methods:{
			change(e) {
			          console.log('change', e);
			        }
		}
	}
</script>

<style lang="scss">

</style>
