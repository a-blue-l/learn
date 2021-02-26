### 抽象语法树 AST [文档传送门](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API#node_objects)  
#### [参考文章](https://segmentfault.com/a/1190000016231512)，以下代码均出自改文章
#### 1、拆解代码 工具（recast）
*如何拆解*
```
function getUser(params1, params2){
    return { params1 * params2 }
}

<!-- 第一步拆解为三部分 -->
getUser (标志对象)
参数[params1, params2]
body (块级域对象)
<!-- 第二步 -->
拆解参数 可拆解为两个标志对象
[
    {
        name: 'params1',
        type: 'identifier'
    },
    {
        name: 'params2',
        type: 'identifier'
    }
]
<!-- 第三步 拆解body -->
body表示 函数体 是一个BlockStatement（块状域对象）
里面包含ReturnStatement（return域对象） 表示 内容
里面包含 BinaryExpression（二项式对象）
里面包含三部分 params1   *   params2

拆解完毕
```

*其他相关*  
(1) 获取拆解工具 npm i recast  
(2) 使用工具   
```
const ast = recast.parse(code)  
```  
#### 2、生成js代码  
（1）variabkeDeckarator 变量声明  
（2）variableDeclarator 变量符号  
（3）functionExpression 函数声明  
```
const {variableDeclaration, variableDeclarator, functionExpression} = recast.types.builders  
ast.program.body[0] = variableDeclaration('const', [  
    variableDeclarator(add.id, functionExpression(  
        null,  
        add.params,  
        add.body  
    ))  
])  
```
#### 3、命令行读取js文件
新建读取js文件
read.js
```
recast.run(function(ast, printSource){
    printSource(ast)
})

...
node read demo.js(要读取的js文件)
```
节点遍历
```
recast.visit(ast, {
    visitExpressionStatement: function({node}) {
        return false
    })
})
```
