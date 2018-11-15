var express = require('express');
var router = express.Router();
//用数组模拟数据库
var users = [
	{
		id:'1',
		name:'李白',
		age: 33
	},
	{
		id:'2',
		name: '李元芳',
		age: 11
	}
];
var users2 = [
	{
		id:1,
		name: '张三',
		tel: '12342134234'
	},
	{
		id:2,
		name: '李四',
		tel: '128987423'
	},
	{
		id:3,
		name: '王五',
		tel: '129863489234'
	}
]

// 路由
/* GET home page. */
router.get('/', function(req, res, next) {
	// 这里的代码是后台代码 意思拦截/的请求,返回一个ejs模板和模板中占位符所对应的数据.
	// render意思是用数据替换模板中的占位符,并把替换后的html页面返回给客户端
  res.render('index', { title: 'Express',img:'https://static.npmjs.com/images/collaboration-security.svg' });
});
router.get('/abc', function(req, res, next) {
	var time = new Date();
  res.render('abc', { title: 'abc',name: '张三' ,time: time});
});
router.get('/def', function(req, res, next) {
	var time = new Date();
  res.render('def');
});
router.get('/ghi', function(req, res, next) {
	var time = new Date();
  res.render('ghi');
});
router.get('/jq', function(req, res, next) {
	var time = new Date();
  res.render('jq');
});
router.get('/bootstrap', function(req, res, next) {
  res.render('test.ejs');
});



router.get('/newtime', function(req, res, next) {
	var time = new Date();
	//返回一个json对象
  	res.send({time:time});
});

/**
* 根据id获取对应的数据对象 并返回
**/
router.get('/userById', function(req, res, next) {
	//怎么获取参数?
	var id = req.query.id;
	var user = {};
	for(var i = 0 ; i < users.length ; i++){
		//找到相等的id
		if(users[i].id == id){
			user = users[i];
			break;
		}
	}
	res.send({user:user});
});
/**
*  保存用户信息
**/
router.get('/saveUser', function(req, res, next) {
	//怎么获取参数?
	var username = req.query.username;
	var age = req.query.age;
	var id = users.length>0?(parseInt(users[users.length-1].id)+1):1;
	console.log('============')
	console.log(id)
	var user = {
		id: id+'',
		name: username,
		age: age
	}
	//把从前台接受的数据 构建为user对象 并插入 "数据库"
	users.push(user);
	
	res.send({err:0});

});
router.post('/saveUser', function(req, res, next) {
	//怎么获取参数? get和post后台获取参数的形式是不同的,因为两种请求的传参方式不同.
	var username = req.body.username;
	var age = req.body.age;
	//
	var id = users.length>0?(parseInt(users[users.length-1].id)+1):1;
	var user = {
		id: id+'',
		name: username,
		age: age
	}
	//把从前台接受的数据 构建为user对象 并插入 "数据库"
	users.push(user);
	//给页面反馈?  最好如果失败 返回-1,不然返回具体的id
	res.send({err:id});

});
/**
* 根据id删除元素
**/
router.get('/del', function(req, res, next) {
	//获取被删除的id
	var id = req.query.userId;
	//删除的user的下标 ,
	var delIndex = -1;
	for(var i = 0 ; i < users.length ; i ++){
		if(users[i].id == id){
			delIndex = i;
		}
	}
	var rs = users.splice(delIndex,1);
	//如果结果大于0 则删除成功 不然删除失败!
	res.send({msg:rs.length>0?'success':'fail'});
});


router.get('/userListAjax', function(req, res, next) {
	setTimeout(function(){
		res.send(users2);
	}, 400)
	
});
router.post('/saveUser2', function(req, res, next) {
	//怎么获取参数? get和post后台获取参数的形式是不同的,因为两种请求的传参方式不同.
	var username = req.body.username;
	var tel = req.body.tel;
	//
	var id = users2.length>0?(parseInt(users2[users2.length-1].id)+1):1;
	var user = {
		id: id+'',
		name: username,
		tel: tel
	}
	//把从前台接受的数据 构建为user对象 并插入 "数据库"
	users2.push(user);
	//给页面反馈?  最好如果失败 返回-1,不然返回具体的id
	res.send({err:0,id:id});
	
});


router.post('/updateUser2', function(req, res, next) {
	//怎么获取参数? get和post后台获取参数的形式是不同的,因为两种请求的传参方式不同.
	var id = req.body.id;
	var username = req.body.username;
	var tel = req.body.tel;
	//修改id相等的对象的usern和tel
	for(var i = 0 ; i < users2.length ;i ++){
		var user = users2[i];
		if(user.id == id){
			user.name = username;
			user.tel = tel;
			break;
		}
	}
	// res.send(code:'success/fail',data:'{}')
	res.send('success');
});


module.exports = router;
