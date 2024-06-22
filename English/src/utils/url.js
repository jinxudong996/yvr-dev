
import Base from './base64'

let base = new Base()
// 加密跳转链接
export function urlEncode(data) {
	let encodeData= base.encode(encodeURIComponent(data));
	return encodeData
};


// 解码
export function urlDecode(data) {
	let encodeData= base.decode(data);
	return encodeData
};



//  获取你想要的参数的值
/*
* name 表示字段名称
* url 加密的value值
* 规则: 直接解析出来想要的字段的值
* */
export function getUrlParam(name, url) {
	let urlDate = decodeURIComponent(base.decode(url))
	console.log(urlDate)
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let r = urlDate.match(reg);
	if (r != null) return unescape(r[2]);
	return "";
};




// 参数直接返回对象

/*
* url 加密的value值
* 规则: 直接以一个对象的形式返回所有值
* */
export function getUrlParamsObj(url) {
	if(url && url != ''){
		let urlObj= {};
		let urlDate = decodeURIComponent(base.decode(url))
		if(urlDate.indexOf("&")){
			console.log(urlDate)
			let urlArr= urlDate.split('&');
			urlArr.map((val, index) =>{
				let valArr= val.split('=');
				urlObj[valArr[0]] = valArr[1];
			})
		}else {
			let valArr= val.split('=');
			urlObj[valArr[0]] = valArr[1];
		}

		return urlObj
	}

}
