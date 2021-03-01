## javasctript event loop[知乎文章参考](https://www.zhihu.com/question/55364497/answer/144215284)

### 分task（宏任务）与microtask['maɪkrəʊ]（微任务）

运行机制：引擎在每执行完一个task之后，取下一个task之前，都会将microtask执行一遍，涉及到代码的执行顺序。  
  
问题：setTimeout与promise/mutationObsever的区别以及执行顺序
