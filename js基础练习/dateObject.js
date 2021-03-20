const _c = function() {
  console.log(arguments[0])
}

_c('******************** date对象*******************')
const _d = new Date()

_c(_d)
_c(_d.toDateString()) // 年月日
_c(_d.toTimeString()) // 时分秒

_c(_d.toLocaleDateString()) // 本地年月日
_c(_d.toLocaleTimeString()) // 本地时分秒

_c(_d.valueOf()) // 毫秒
_c(Date.now()) // 当前时间毫秒

_c(_d.toString())
_c(_d.toUTCString()) // 国际时间字符串

let _dd = new Date('9/10/2021 10:10:10')

_c(_dd)
_c(_dd.getTime()) // 毫秒数
_c(_dd.setTime(10002001002)) // 毫秒数
_c(_dd) // 毫秒数
_c(_dd.getFullYear())
_c(_dd.getUTCFullYear())
_c(_dd.setFullYear(1980))
_c(_dd.getMonth())
_c(_dd.getUTCMonth())
_c(_dd.setMonth(0))
_c(_dd)
_c(_dd.getDate())
_c(_dd.setDate(2))
_c(_dd)
_dd = new Date();
_c(_dd.getDate())
_c(_dd.getDay())
_c(_dd.getHours())
_c(_dd.getMinutes())
_c(_dd.getSeconds())


_c([1,2,3,3,2,2].reverse())
_c([1,2,3].some((item) => {
  return item > 2
}))
_c([1, 2, 3].every((item) => {
  return item > 2
}))
_c([1, 2, 3].filter((item) => {
  return item > 2
}))
_c([1, 2, 3].map((item) => {
  return 1
}))
_c([1, 2, 3].forEach((item) => {
  return 1
}))

_c(Date.UTC('10/9/2002'))

_c([1,2,3].lastIndexOf(1, -2))
