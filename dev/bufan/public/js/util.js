/**
*  {url:'xx',type:'get',data:{id:'123',name:'张三'},fn:fn}
**/
function myAjax(params){
	var url = params.url; // /abc
	var type = params.type;
	var data = params.data||{};
	var fn = params.fn || null;
	var xhr = new XMLHttpRequest();
	
	// get: abc?id=123&name=张三
	// post: abc   
	//   	 send(id=123&name=张三)
	var dataStr = '';
	if(data){
		for(var key in data){
			dataStr += '&'+key+'='+data[key]; //  &id=123&name=张三
		}
		dataStr = dataStr.substr(1); //id=123&name=张三
	}

	if(type.toLowerCase()=='get'){
		if(dataStr){
			dataStr = '?'+dataStr;
		}
		xhr.open(type,url+dataStr); // abc?id=123&name=张三
		xhr.send(null)
	}else{
		// post的参数需要send来发送
		// {id:'123',name:'张三'} ==> id=123&name=张三
		xhr.open(type,url);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(dataStr?dataStr:null);
	}
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			//注意: 原生ajax返回的数据类型是字符串
			var rs = xhr.responseText;
			//转成对象模式
			var rsObj = JSON.parse(rs);
			// 假如有毁掉 则执行
			if(fn){
				fn(rsObj);
			}
		}
	}
}