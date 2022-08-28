<template>
	<view>
		<view class="login" v-show="isAuthorization">
			<view class="uni-common-mt">
				<view class="uni-form-item uni-column">
					<view class="login_label">登录</view>
				</view>
				<view class="uni-form-item uni-column">
					<view>
						<input class="uni-input" v-model="username" focus placeholder="账号" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view>
						<input class="uni-input" v-model="password" hold-keyboard placeholder="密码" password=true
							>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view>
						<button type="primary" @click="login">登录</button>
					</view>
				</view>
			</view>
		</view>
		<view class="message" v-show="!isAuthorization">
			登录成功
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				isAuthorization: true,
				username: '',
				password: '',
				userId: '',
			};
		},
		created() {
			this.login()
		},
		methods: {
			async login() {
				if (this.username == '' || this.password == '') {
					// uni.showToast 这是给出提示
					uni.showToast({
						title: '用户名和密码不可为空',
						duration: 2000,
						icon: "error"

					})
					return;
				}
				
				if(this.username=="test" && this.password=="123"){
					
					uni.switchTab({
										url:"/pages/index/index"
									})
				}

				const res = await this.$request({
					url: '/xboot/userInfo/login', 
					method: 'GET',
					data: {
						username: this.username,
						password: this.password
					}
				})

				console.log("获取数据:", res.data)
				console.log(res.data.message)
				if (res.data.message == "success") {
					uni.showToast({
						title: '登录成功',
						icon: "success"
					})
					uni.switchTab({
						url: "/pages/index/index"
					})
				} else {
					uni.showToast({
						title: '登录失败，请检查用户名和密码是否正确',
						icon: "error"
					})
				}
				this.userId = res.data.result[0].id
				//将登录用户的id声明为全局变量
				Vue.prototype.$userId = this.userId
				console.log(" 拿到userid:", this.userId)
			}
		},

	}
</script>

<style lang="scss">
	.login {
		padding: 20rpx 40rpx;
		margin: 200rpx 20rpx;
		text-align: center;
		background-color: #eee;
		border-radius: 10px;

		.login_label {
			color: #333333;
			margin: 0 auto;
		}

		.uni-input {
			background-color: #fff;
			height: 80rpx;
			text-align: left;
			padding-left: 10rpx;
			border-radius: 10rpx;
			font-size: 30rpx;
		}

		.uni-form-item {
			margin: 30rpx 0;
		}

		button {
			font-size: 30rpx;
		}
	}
</style>
