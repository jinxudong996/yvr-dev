import Vue from 'vue'

export function isvalidUsername(str) {
  //var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证手机号
 // return reg.test(str)
 return true;
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/*验证用户名*/
export function validaName(str){
	const reg=/[A-Za-z0-9_\-\u4e00-\u9fa5]+/
	return reg.test(str)
}
/*验证QQ号*/
export function validateQQ(str){
	const reg= /[1-9]([0-9]{5,11})/;
	return reg.test(str)
}
/*验证小数*/
export function validFloat(str,integerSize,floatSize){
	if(!str && str != 0){
		return false;
	}
	if(!integerSize || integerSize<1){
		integerSize = 1;
	}
	if(!floatSize || floatSize<1){
		floatSize = 1;
	}
	const reg = new RegExp("^((-?\\d{1,"+integerSize+"})(\\.\\d{1,"+floatSize+"})?)$");
	if(!reg.test(str)){
		return false;
	}
	return true;
}
export function isCard(code) {
	var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
	var tip = "";
	var pass = true;

	if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
		tip = "身份证号格式错误";
		pass = false;
	}

	else if (!city[code.substr(0, 2)]) {
		tip = "地址编码错误";
		pass = false;
	}
	else {
		//18位身份证需要验证最后一位校验位
		if (code.length == 18) {
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			//校验位
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			//最后一位不区分大小写
			if (code[17] == 'x') code[17] = code[17].toUpperCase();
			if (parity[sum % 11] != code[17]) {
				tip = "校验位错误";
				pass = false;
			}
		}
	}
	return pass
};

/*验证整数*/
export function validDigits(str,integerSize){
	if(!str){
		return false;
	}
	if(!integerSize || integerSize<1){
		integerSize = 1;
	}
	const reg = new RegExp("^(-?\\d{1,"+integerSize+"})$");
	if(!reg.test(str)){
		return false;
	}
	return true;
}
/*验证最大值*/
export function validMaxValue(str,maxValue){
	if(!str && str != 0){
		return false;
	}
	const reg = /^(-?\d+)(\.\d+)?$/;
	if(!reg.test(str)){
		return false;
	}
	let tempStr = parseFloat(str);
	let tempMaxValue = parseFloat(maxValue);
	if(tempStr>tempMaxValue){
		return false;
	}
	return true;
}
/*验证最小值*/
export function validMinValue(str,minValue){
	if(!str && str != 0){
		return false;
	}
	const reg = /^(-?\d+)(\.\d+)?$/;
	if(!reg.test(str)){
		return false;
	}
	let tempStr = parseFloat(str);
	let tempMinValue = parseFloat(minValue);
	if(tempStr<tempMinValue){
		return false;
	}
	return true;
}
/*验证长度*/
export function validMaxLength(str,maxLength){
	if(!str && str != 0){
		return false;
	}
	if(str.length>maxLength){
		return false;
	}
	return true;
}
/*验证长度*/
export function validNumber(str){
  return isNaN(str) ? false :true;
}

/**
 * remote 验证
 * @param url 服务路径
 * @param value 验证的值
 * @param message 提示信息
 * @param callback 回调
 */
export function remoteValid(url,value,message,callback){
  Vue.prototype.service ({
    url: url,
    method: 'post',
    data: ({
      value: value
    })
  }).then(function (response) {
    if(!response){
      return callback(new Error(message));
    }
  }).catch(function (data) {
  });
}
