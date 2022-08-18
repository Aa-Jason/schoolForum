<template>
	<view class="changeInfo">
		<view class="box">
			<view class="img-box">
				<image class="img" src="/static/avator.jpg" mode="" @click="changeImg()"></image>
				<view class="text">
					点击更换头像
				</view>
			</view>
		</view>
		
		<view class="info-box">
			<u-cell  title="昵称" :value="value1" size="large" isLink url=""></u-cell>
			<u-cell  title="简介" :value="value2" size="large" isLink url=""></u-cell>
			<u-cell  title="学校" :value="value3" size="large" isLink url=""></u-cell>
			<u-cell  title="性别" :value="value4" size="large" isLink url=""></u-cell>
			<u-cell  title="生日" :value="value5" size="large" isLink url=""></u-cell>
		</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
	      data() {
	        return {
				fileList1: [],
				value1: 'wsx',
				value2: '爱睡觉',
				value3: '江苏科技大学',
				value4: '男',
				value5: '2000-01-01',
	        }
	      },
	      methods: {
	        change(e) {
	          console.log('change', e);
	        },
			changeImg(){
				uni.chooseImage({
					count:1,
					sourceType:['album'],
					sizeType:['original','compressed'],
					success: (res) => {
						console.log(res.tempFilePaths)
					}
				})
			}
			// submit() {
			// 	// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
			// 	this.$refs.form1.validate().then(res => {
			// 		uni.$u.toast('校验通过')
			// 	}).catch(errors => {
			// 		uni.$u.toast('校验失败')
			// 	})
			// },
			// 删除图片
				// 		deletePic(event) {
				// 			this[`fileList${event.name}`].splice(event.index, 1)
				// 		},
				// 		// 新增图片
				// 		async afterRead(event) {
				// 			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				// 			let lists = [].concat(event.file)
				// 			let fileListLen = this[`fileList${event.name}`].length
				// 			lists.map((item) => {
				// 				this[`fileList${event.name}`].push({
				// 					...item,
				// 					status: 'uploading',
				// 					message: '上传中'
				// 				})
				// 			})
				// 			for (let i = 0; i < lists.length; i++) {
				// 				const result = await this.uploadFilePromise(lists[i].url)
				// 				let item = this[`fileList${event.name}`][fileListLen]
				// 				this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
				// 					status: 'success',
				// 					message: '',
				// 					url: result
				// 				}))
				// 				fileListLen++
				// 			}
				// 		},
				// 		uploadFilePromise(url) {
				// 			return new Promise((resolve, reject) => {
				// 				let a = uni.uploadFile({
				// 					url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
				// 					filePath: url,
				// 					name: 'file',
				// 					formData: {
				// 						user: 'test'
				// 					},
				// 					success: (res) => {
				// 						setTimeout(() => {
				// 							resolve(res.data.data)
				// 						}, 1000)
				// 					}
				// 				});
				// 			})
				// 		},
		  }
		}
</script>

<style scoped lang="scss">
	.changeInfo{
		height: 200px;
		width: 100%;
		background-color:aliceblue;
		.box{
			width: 100%;
			height: 200px;
			margin: 0 auto;
			border-top: 1px solid aliceblue;
			border-bottom: 1px solid gainsboro;
			.img-box{
				text-align: center;
				.img{
					margin-top: 30px ;
					width: 70px;
					height: 70px;
					border-radius: 50%;
				}
				.text{
					margin-top: 13px;
					color: #999999;
					font-size: 13px;
				}
			}
		}
	}
	.info-box{
		padding: 0 10px;
		// margin-top: 50px;
	}
	
</style>
