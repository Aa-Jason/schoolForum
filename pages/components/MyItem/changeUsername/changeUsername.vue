<template>
	<view>
		<view class="change_nickname">
			<text>请输入新昵称：</text>
		</view>
		<u--input
			placeholder="不超过10个字"
			border="bottom"
			clearable
			maxlength=10
		  ></u--input>

		<br>
		<view class="change_album">
			<view class="change_album_text">
				<text>请上传新头像：</text>
			</view>
			<view class="change_album_pic">
				<u-upload
						:fileList="fileList1"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						multiple
						:maxCount="10"
					></u-upload>
			</view>
		</view>
		
			
		  <u-button
		  	type="primary"
		  	text="提交"
		  	customStyle="margin-top: -5px"
		  	@click="submit"
		  ></u-button>
	</view>
</template>

<script>
	export default {
	      data() {
	        return {
				fileList1: [],
				value: ''
	        }
	      },
	      methods: {
	        change(e) {
	          console.log('change', e);
	        },
			submit() {
				// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
				this.$refs.form1.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			// 删除图片
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
									url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
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

<style lang="scss">
	.change_nickname{
		display: flex;
		float: left;
		margin: 10px;
	}
	.change_album{
		.change_album_text{
			margin-left: 10px;
			margin-top: 10px;
		}
		.change_album_pic{
			margin-left: 18px;
			margin-top: 10px;
		}
	}
	
</style>
