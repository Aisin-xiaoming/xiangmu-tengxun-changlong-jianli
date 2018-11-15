# vue基础
## vue简介
> 渐进式JavaScript 框架,易用、灵活、高效。之前学习的js框架有jquery，zepto.js.

## 框架分类（回顾）
+ js框架  jquery  zepto
+ 前端ui框架  jquery-ui bootstrap(基于jq)  amaze-ui layui(基于jq的) element-ui(基于vue)
+ 插件、库   swiper.js  lightbox（灯箱） echarts(报表插件,饼图、柱状图、折线图、雷达图) parallax.js(视差) animate.css  fullPage.js 

## 前端的三驾马车
> 目前在市面上最常用的前端的框架有jquery，angular.js 1.x ， angular.js 5.x ， react.js , vue.js 2.x 。

+ angular.js 谷歌 最早的前端mvc框架（曾代表了前端未来） 最早的版本1.x。缺点：难以上手，更难精通，文档烂，资料少，新概念多，语法冗余。优点：首次实现双向数据绑定，提高开发效率，实现前端模块化开发，实现mvc开发模式。 但是angular从1.x到2.x（重做）的版本升级，实现了“断崖式升级”。 现在发展到了5.x。
+ react.js facebook 目前全球使用最广泛的一个前端mv*框架。有着最完整的生态圈。
+ vue.js 尤雨溪 目前国内使用最广泛的前端mv\*框架。简单，符合国人思考习惯，易于上手，有相对完整的生态圈。

## 基本语法
+ 输出作用域的值 使用{{}}
+ 输出html  v-html指令. 注意,避免 XSS 攻击,任何时候,不要使用保单里的html.
+ 表达式 {{}}
+ v-if 条件渲染
+ v-bind  绑定属性 缩写 :title="xxx"
+ v-on   绑定事件  v-on.click.prevent 修饰符  缩写: @click = 'xx'
+ v-bind和v-on的缩写 


## 声明周期函数
+ created vue实例对象创建之后调用。一般用于对data作用域的数据进行初始化操作.
+ mounted vue的实例对象创建并且解析模板之后调用。对于第三方的插件等需要操作dom对象的需要在mounted里进行初始化.


## 计算属性
> 可以完成对作用域数据对象的修饰,并在页面中展示.同时作用域中相应的数据对象修改,会直接被反应.
+ 修饰数据对象可以用计算属性
+ 不建议在模板中直接使用函数
+ 函数一般在事件绑定时调用

## watch
> 可以对作用域的数据对象 进行监听.并获取改变前后的值.可以实现跟计算属性(computed)一样的功能(结果依赖数据对象而更新),但是在watch里一般处理耗时操作.虽然在计算属性也能处理耗时操作,但一般不这么做!

### 官方案例
+ axios(以后项目会用到) 基于vue的项目中常用的一个ajax的封装库.回顾:之前对ajax的封装myAjax();还有: $.ajax({url:'xxx'});
+ lodash.js 类似于jq的封装,不过是封装对数组或者对象的操作.

```javascript
	var users=[
			{
				name:'张三',
				age: 20
			},
			{
				name:'李四',
				age: 43
			},
			{
				name:'王五',
				age: 40
			}
		]
		//根据年龄排序
		// var users2 = [];
		// sortBy对users的age属性进行升序排序 _指的就是lodash
		users = _.sortBy(users,['age']);
		console.log(users);

```

## class
+ 对象形式

```html
	//注意: v-bind 与 class可以共存
	<h2 :class="{danger:isDanger,'font-border':isBorder}" class="italic">{{title}}</h2>

```

+ 数组形式

```html
	<!-- 注意: 在v-bind:指令中 所有的代码都是js代码 -->
		<h2 :class="[classList1,'italic']">{{title}}</h2>

```

## style
> 同class

## 条件渲染


## 列表渲染
+ 数组
+ 对象
+ key
+ 配合v-if
+ 检测数组数据更新(重点)





