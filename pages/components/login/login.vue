<template>
	<view>
		<view class="login" v-show="isAuthorization">
					<view class="uni-common-mt">
						<view class="uni-form-item uni-column">
							<view class="login_label">登录</view>
						</view>
						<view class="uni-form-item uni-column">
							<view>
								<input class="uni-input" v-model="username" focus placeholder="账号" @input="onUsename" />
							</view>
						</view>
						<view class="uni-form-item uni-column">
							<view>
								<input class="uni-input" v-model="password" hold-keyboard placeholder="密码" password=true @input="onPwd">
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
	export default {
		data() {
			return {
				"isAuthorization": true,
				"username": '',
				"password": '', 
			};
		},
		created() {
			this.login()
		},
		methods: {
			onUsename:function(event){
				// 输入的内容可以由event.target.value来获取
				this.username = event.target.value
				console.log(this.username,"输入")			},
			onPwd:function(event){
				this.password = event.target.value
			},
			login(){
				if(this.username==''||this.password==''){
					// uni.showToast 这是给出提示
					uni.showToast({
						title: '用户名和密码不可为空',
						duration: 2000,
						icon:"error"
						
					})
					return;
				}
				// if(this.username=="123" && this.password=="123"){
				// 	uni.switchTab({					
				// 		url: "/pages/index/index"
				// 	})
				// 	console.log("跳转")
				// }
				// else{
				// 	alert("账户或密码错误，请重新输入")
				// }
							
				const res = this.$myRequest({
					url: '/xboot/auth/login',
					data:{
						username:this.username,
						password:this.password,
					},
				})
				
				// const res= uni.request({
				// 	url:'http://localhost:8888/xboot/auth/login',
				// 	method:"POST",
				// 	header: {
				// 		'content-type': "application/x-www-form-urlencoded"
				// 	},
				// 	data:{
				// 		username:JSON.stringify(this.username),
				// 		password:JSON.stringify(this.password) 
				// 	},
				// 	success:(res)=>{
				// 		if(res.data.status !== 0 && res.data.status !== 200){
				// 			console.log("响应：",res)
				// 			return uni.showToast({
				// 				title: '获取数据失败'
				// 			})
							
				// 		}
				// 		//抛出结果
				// 	},
				// 	fail: (err) => {
				// 		console.log("错误信息",err)
				// 		uni.showToast({
				// 			title: '请求接口失败',
				// 			icon:"error"
				// 		})
				// 	}
				// })
				
				console.log("res",res)
				uni.switchTab({
									url:"/pages/index/index"
								})
				
				
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
