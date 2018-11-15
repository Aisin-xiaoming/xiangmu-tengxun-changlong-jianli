## node.js
> 是一个本地的javascript运行环境

## npm
> 是一个node package manager ,提供大量的js插件等. 随着node.js的安装自动安装.

## express
> 是一个node.js的web开发框架.

+ 安装express
```shell
		//通过npm安装一个  express的生成器  -g是全局安装的意思
	$ npm install express-generator -g

```

+ 创建文件夹
> 可以手动创建文件夹myapp(名字随不起),也可以通过命令创建

```shell
	$ mkdir  myapp

```

+ 安装express
> 进入刚创建的文件夹myapp,shift+鼠标右键==> 打开cmd,输入以下命令 ;安装本地的express脚手架 

```shell
	$ express -e

```

+ 安装依赖库
> 安装依赖库

```shell
	$ npm install
```

+ 开启服务

```shell
	$ npm start

```

+ 发布成功
> http://localhost:3000

+ 地址
	- localhost 指的就是本地服务器
	- 127.0.0.1 
	- http://192.160.0.100:3000/

+ 创建package.json
> npm init
