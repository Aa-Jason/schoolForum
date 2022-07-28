const BASE_URL='http://localhost:8888'
export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method:options.method || 'POST',
			header: {
				'content-type': "application/x-www-form-urlencoded"
			},
			data:options.data || {},
			success:(res)=>{
				if(res.data.status !== 0 && res.data.status !== 200){
					console.log("响应：",res)
					return uni.showToast({
						title: '获取数据失败'
					})
					
				}
				//抛出结果
				resolve(res)
			},
			fail: (err) => {
				console.log("错误信息",err)
				uni.showToast({
					title: '请求接口失败',
					icon:"error"
				})
				reject(err)
			}
		})
	})
}