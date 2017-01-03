import bridge from 'lm-na-bridge'
export default function(){
	return new Promise((resolve,reject)=>{
		bridge().then((bridge)=>{
			bridge.callHandler('data_loginStatus', {}, function(response) {
				// alert(response)
				let data=response ? JSON.parse(response) : {}
				// return Promise.resolve({userId:data.userId,shop:{id:data.shopId}})
				resolve({userId:data.userId,shop:{id:data.shopId}})
			})
		},(err)=>{
			// return Promise.reject(err)
			reject(err)
		})
	})
}
