const baseUrl = 'http://localhost:8888'
export const request = (options) => {
	return new Promise((resolve, reject) => {
		// 封装主体：网络请求
		uni.request({
			url: baseUrl + options.url,
			header: {
				'content-type': "application/x-www-form-urlencoded"
			// 	// "Access-Control-Allow-Origin": "http://localhost:8888",
			},
			data: options.data || {},
			// 默认值GET，如果有需要改动，在options中设定其他的method值
			method: options.method || 'GET',
			success: (res) => {
				// console.log("封装request的数据：", res.data); // 控制台显示数据信息
				resolve(res)
			},
			fail: (err) => {
				页面中弹框显示失败
				uni.showToast({
					title: '请求接口失败',
					icon: 'error'
				})
				console.log("请求接口失败")
				// 返回错误消息
				reject(err)
			},
			catch: (e) => {
				console.log(e);
			}
		})
	})
}
