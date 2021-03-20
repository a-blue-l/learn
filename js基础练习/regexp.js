/**
 * @attribute（new RegExp） lastIndex 下一个查找的位置
 * @method exec 专为捕获组设计
 * @callback matchs { index, input } 匹配项在字符串中的位置/查找的字符串
 */ 

let c = function () {
  console.log(arguments[0])
}

c('******************exec********************')
let text = 'cat bat mat iat';
let regexp = /(.at)/g;
let matchs = regexp.exec(text);

c(matchs)
c(matchs.index)
c(matchs.input)
c(regexp.lastIndex)

matchs = regexp.exec(text);

c(matchs)
c(matchs.index)
c(matchs.input)
c(regexp.lastIndex)

c('******************test********************')


c('*****************构造函数静态方法*****************')
// 基于最后一次正则表达式的操作而变化
let text1 = 'this has been a short summer';
let reg1 = /(.)hort/g;

c(reg1.test(text1))
c(RegExp.input)
c(RegExp.lastMatch)
c(RegExp.lastParen)
c(RegExp.leftContext)
c(RegExp.rightContext)
c(reg1.multiline)
c(RegExp.$1)
c(RegExp.$2)
