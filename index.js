var bridge =require('lm-na-bridge')
module.exports=function(){
	return new Promise(function(resolve,reject){
		bridge().then(function(bridge){
			bridge.callHandler('data_loginStatus', {}, function(response) {
				// alert(response)
				var data=response ? JSON.parse(response) : {}
				// return Promise.resolve({userId:data.userId,shop:{id:data.shopId}})
				resolve({userId:data.userId,shop:{id:data.shopId}})
			})
		},function(err){
			// return Promise.reject(err)
			reject(err)
		})
	})
}
