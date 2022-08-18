<template>
	<view class="">
		<u-cell title="姓名" :value=name></u-cell>
		<u-cell title="学院" :value=dept></u-cell>
		<u-cell title="专业" :value=major></u-cell>
		<u-popup :show="show" @close="close" @open="open">
			<view class="pop_change">
				<view class="pop_change_text">
					<text>姓名：</text>
				</view>
				<view class="pop_change_input">
					<u--input placeholder="请输入姓名" border="bottom" v-model="name" fontSize=15px>
					</u--input>
				</view>
				
				<view class="pop_change_text">
					<text>学院：</text>
				</view>
				<u--input placeholder="请输入学院" border="bottom" v-model="dept" fontSize=15px>
				</u--input>
				<view class="pop_change_text">
					<text>专业：</text>
				</view>
				<u--input placeholder="请输入专业" border="bottom" v-model="major" fontSize=15px>
				</u--input>
				<u-button type="primary" text="提交" @click=""></u-button>
			</view>
		</u-popup>
		<u-button type="primary" text="修改" form-type="submit" @click="show = true"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'wsx',
				dept: '计算机学院',
				major: '电子信息',
				show: false
			};
		},
		methods: {
			// change(e) {
			//           console.log('change', e);
			//         },
			async getIndentifyInfo() { //获取修改的信息
				const res = await this.$request({
					url: '',
					method: 'POST',
					data: {
						name: this.name,
						dept: this.dept,
						major: this.major,
					}
					// this.name = res.data.name,
				})
				console.log(res.data)
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},

		}
	}
</script>

<style lang="scss">
	.pop_change{
		background-color: aliceblue;
		.pop_change_text {
			font-size: 15px;
			display: flex;
			float: left;
			margin-top: 10px;
			margin: left 10px; ;
		}

	}
	
</style>
