<template>
	<view class="main">
		<view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column" id="postTitle">
					<view class="title">帖子主题</view>
					<view class="uni-textarea">
						<textarea @blur="bindTextAreaBlur" v-model="postTitle" placeholder="不超过30字" maxlength="30"
							auto-height="true" />
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">分区</view>
					<view class="part">
						<radio-group name="radio">
							<label>
								<radio value="part1" /><text>恋爱交友</text>
							</label>
							<label>
								<radio value="part2" /><text>求助答疑</text>
							</label><br>
							<label>
								<radio value="part3" /><text>求职招聘</text>
							</label>
							<label>
								<radio value="part4" /><text>考研交流</text>
							</label>
						</radio-group>
					</view>
				</view>
				
				<!-- 输入框 -->
				<view class="uni-form-item uni-column" id="postContent">
					<view class="uni-title uni-common-pl">帖子内容</view>
					<view class="uni-textarea">
						<textarea @blur="bindTextAreaBlur" v-model="postContent" maxlength="300"
							placeholder="不超过300字" />
					</view>
				</view>
				<view class="uni-form-item uni-column" id="pictureUpload">
					<u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="3"></u-upload>
				</view>
				<view class="uni-btn-v" id="postButton">
					<button size="mini" class="submitButton" form-type="submit">发布</button>
					<button size="mini" class="cancelButton" form-type="reset">清空</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				postTitle: '',
				postContent: '',
				fileList: [{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					}
				],
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata) + postTitle + postContent,
					showCancel: true
				})
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			// uploadFilePromise(url) {
			// 	return new Promise((resolve, reject) => {
			// 		let a = uni.uploadFile({
			// 			url: 'http://192.168.2.21:7001/upload', 
			// 			filePath: url,
			// 			name: 'file',
			// 			formData: {
			// 				user: 'test'
			// 			},
			// 			success: (res) => {
			// 				setTimeout(() => {
			// 					resolve(res.data.data)
			// 				}, 1000)
			// 			}
			// 		});
			// 	})
			// },
			formReset: function(e) {
				console.log('清空数据')
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		margin-top: 5px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}

	#postTitle {
		margin-bottom: 5px;

		.uni-textarea {
			padding: 5px;
			border: 1px solid #F5F5F5;
			border-radius: 3px;
			height: 45px;
		}

		.uni-textarea:hover {
			border: 1px solid blueviolet;
		}
	}

	.part {
		padding: 5px;
		margin-bottom: 5px;

		label {
			margin-right: 20px;
		}

		radio {
			padding-bottom: 10px;
		}
	}

	#postContent {
		margin-bottom: 5px;

		.uni-textarea {
			margin: auto;
			margin-top: 5px;
			height: 200px;
			padding: 5px;
			border: 1px solid #F5F5F5;
			border-radius: 10px;
		}

		.uni-textarea:hover {
			;
			border: 1px solid blueviolet;
		}
	}

	#postButton {
		.submitButton {
			margin-right: 10px;
			background-color: cornflowerblue;
			color: white;
		}

		.submitButton:hover {
			background-color: blue;
			font-weight: bold;
		}

		.cancelButton {
			background-color: #FF7F50;
			color: aliceblue;
		}

		.cancelButton:hover {
			background-color: #FF0000;
			font-weight: bold;
		}
	}
</style>
