<template>
	<view class="main">
		<view>
			<uni-form ref="valiForm" :rules=rules :modeValue="valiFormData">
				<view class="uni-form-item uni-column" id="postTitle">
					<uni-section title="帖子主题" titleFontSize="16px" class="title" type="line">
					<view class="uni-textarea">
						<textarea v-model="valiFormData.postTitle" placeholder="不超过30字" maxlength="30"
							auto-height="true" />
					</view>
					</uni-section>
				</view>
				<view class="uni-form-item uni-column">
					<uni-section title="分区" titleFontSize="16px" class="title" type="line">
					<view class="part" style="margin-bottom: 10px;">
						<uni-data-select placeholder="请选择分区" v-model="value" :localdata="range" @change="change">
						</uni-data-select>
					</view>
					</uni-section>
				</view>

				<!-- 输入框 -->
				<view class="uni-form-item uni-column" id="postContent">
					<uni-section title="帖子内容" titleFontSize="16px" class="title" type="line">
					<view class="uni-textarea">
						<textarea v-model="valiFormData.postContent" maxlength="300" placeholder="不超过300字" />
					</view>
					</uni-section>
				</view>
				<view class="uni-form-item uni-column" id="pictureUpload">
					<u-upload v-model="fileList1" :fileList="fileList1" @afterRead="afterRead" @delete="deletePic"
						name="1" multiple :maxCount="3"></u-upload>
				</view>
				<view class="uni-btn-v" id="postButton">
					<button size="primary" type="primary" form-type="submit">发布</button>
				</view>
			</uni-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				range: [{
						text: '恋爱交友',
						value: '1'
					},
					{
						text: '求助答疑',
						value: '2'
					},
					{
						text: '求职招聘',
						value: '3'
					},
					{
						text: '瓜田趣事',
						value: '4'
					},
					{
						text: '手机数码',
						value: '5'
					},
					{
						text: '运动户外',
						value: '6'
					},
					{
						text: '衣物饰品',
						value: '7'
					},
					{
						text: '生活用品',
						value: '8'
					},
					{
						text: '文具书籍',
						value: '9'
					},
				],
				valiFormData: {
					postTitle: '',
					postContent: '',
				},
				fileList1: [{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					}
				],
				rules: {
					postTitle: {
						rules: [{
							required: true,
							errorMessage: '标题不能为空'
						}]
					},
					postContent: {
						rules: [{
							required: true,
							errorMessage: '标题不能为空'
						}]
					},
				}

			}
		},
		methods: {
			change(e) { //获取分区
				console.log("e:", e);
				let part = e;
			},
			//提交数据
			submit(ref) {
				var formdata = e.detail.value
				this.$refs[ref].validate().then(res => {

					uni.request({
						url: 'http://localhost:8888/api',
						method: 'POST',
						header: {
							'content-type': "application/x-www-form-urlencoded"
						},
						data: {
							valiFormData: JSON.stringify(this.valiFormData),
							part: part
						},
						success: res => {
							uni.reLaunch({
								url: "/pages/index/index"
							})
						},
						fail: () => {
							console.log('err', err)
							uni.showToast({
								title: "网络连接错误，请稍后再试！",
								icon: "error"
							});
						},
						complete: () => {}

					}).catch(err => {
						wx.showModal({
							title: `提示`,
							content: `未填写信息`,
							showCancel: false
						});
						console.log('err', err);
					})
					uni.switchTab({
						url: "/pages/index/index"
					})
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
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://localhost:8082/upload',
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		margin-left: 10px;
		margin-right: 10px;
	}

	#postTitle {
		margin-bottom: 5px;
		.uni-textarea {
			
			padding: 5px;
			border: 1px solid #F5F5F5;
			border-radius: 4px;
			height: 45px;
		}

		.uni-textarea:hover {
			border: 1px solid blueviolet;
		}
	}
	
	.part:hover{
		background-color: #F5F5F5;
	}
	
	#postContent {
		margin-bottom: 5px;

		.uni-textarea {
			margin: auto;
			margin-top: 5px;
			height: 200px;
			padding: 5px;
			border: 1px solid #F5F5F5;
			border-radius: 4px;
		}

		.uni-textarea:hover {
			border: 1px solid blueviolet;
		}
	}
</style>
