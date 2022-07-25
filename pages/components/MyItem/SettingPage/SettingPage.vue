<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否开启评论推送</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value1"
						@change="change"
					></u-switch>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: false,
			};
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option);
			},
		}
	}
</script>

<style lang="scss">
		.u-page {
			&__tag-item {
				margin-right: 30px;
			}
		}
		.u-demo-block__content {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: center;
		}
</style>
