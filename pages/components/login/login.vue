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
				// if(this.username==''||this.password==''){
				// 	// uni.showToast 这是给出提示
				// 	uni.showToast({
				// 		title: '用户名和密码不可为空',
				// 		duration: 2000,
				// 		icon:"error"
						
				// 	})
				// 	return;
				// }
				// if(this.username=="123" && this.password=="123"){
				// 	uni.switchTab({					
				// 		url: "/pages/index/index"
				// 	})
				// 	console.log("跳转")
				// }
				// else{
				// 	alert("账户或密码错误，请重新输入")
				// }
				
				//传参接口
				uni.request({
					method:"POST",
				    url: 'http://localhost:8888/xboot/auth/login',
					//http://localhost:8888/xboot/common/captcha/draw/  common/captcha/init
				    data: {
				        username:this.username,
						password:this.password,
						
				    },
				    header: {
				        'custom-header': "application/x-www-form-urlencoded" //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res);
				        // this.text = 'request success';
						if(res.statusCode==204){
							// 解构的意义实际上是把res.data.access_token的值拿出来，赋值给一个变量access_token
							let {access_token} = res.data;
							uni.setStorageSync('token',access_token);
							uni.showToast({
								title: '登陆成功',
								duration:2000
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:"/pages/index/index"
								})
							},3000)
						}
						else{
							uni.showToast({
								title: '账户名或密码错误，请重新输入',
								icon:'error'
							});
						}
				    }
				});
				
				// uni.showModal({
				// 	title: '输入完成',
				// 	content: '是否登录',
				// 	success: function (res) {
				// 		console.log(res)
				// 	if (res.confirm) {
				// 		console.log('用户点击确定');
				// 	} else if (res.cancel) {
				// 		console.log('用户点击取消');
				// 		}
				// 	}
				// })
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
