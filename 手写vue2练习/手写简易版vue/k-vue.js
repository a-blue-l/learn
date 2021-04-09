// 实现KVue类
class KVue {
  constructor(options) {
    // 保存基本数据
    this.$options = options
    this.$el = document.querySelector(options.el)
    this.$data = options.data
    this.$methods = options.methods // 记录methods

    // 数据响应式
    observe(this.$data);

    // 做代理，让vm可以访问data上的数据
    proxy(this, this.$data)

    // 模板编译
    new Compile(options.el, this)
  }
}

// Compile 编译器类，编译dom节点
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    // 递归遍历节点
    if (this.$el) {
      this.compile(this.$el)
    }
  }

  // 这里做模板编译
  compile(el) {
    el.childNodes.forEach(node => {
      if (this.isElm(node)) {
        this.compileElement(node)
      } else if (this.idInter(node)) {
        // 解耦，函数单一职责，内容的更改交给其他函数去做
        this.compileText(node)
      }

      if (node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  // 判断是否为element元素
  isElm(node) {
    return node.nodeType === 1
  }

  // 判断是否为插值文本
  idInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileElement(node) {
    const attrs = node.attributes;

    Array.from(attrs).forEach(attr => {
      const attrName = attr.name;
      const attrValue = attr.value;
      if (this.idDir(attrName)) {
        // 如果是指令
        const dir = attr.name.slice(2)
        this[dir] && this[dir](node, attrValue)
      } else if (this.isEvent(attrName)) {
        // 如果是事件（内置）
        const eve = attrName.startsWith('@') ? attrName.slice(1) : attrName.slice(5)
        const handler = this.$vm.$methods[attrValue]
        // 添加监听事件
        this.bindEvent(node, eve, handler)
      }
    })
  }

  compileText(node) {
    this.update(node, RegExp.$1, 'text')
  }

  // 判断是否为指令
  idDir(str) {
    return str.startsWith('k-') && !str.startsWith('k-on:')
  }
  // 判断是否为事件
  isEvent(str) {
    return str.startsWith('@') || str.startsWith('k-on:')
  }

  // 绑定事件
  bindEvent(node, eve, handler) {
    node.addEventListener(eve, () => {
      handler.call(this.$vm)
    })
  }

  // 统一更新函数，高阶函数，抽象出来之后，可以统一进行watcher创建
  update(node, value, dir) {
    const fn = this[`${dir}Update`]
    fn && fn(node, this.$vm[value])

    new Watcher(this.$vm, value, function (val) {
      fn && fn(node, val)
    })
  }

  // 指令操作函数

  // k-text
  text(node, val) {
    this.update(node, val, 'text')
  }

  textUpdate(node, val) {
    node.textContent = val;
  }

  // k-html
  html(node, val) {
    this.update(node, val, 'html')
  }

  htmlUpdate(node, val) {
    node.innerHTML = val;
  }

  // k-model
  model(node, val) {
    node.addEventListener('input', (e) => {
      this.$vm[val] = e.target.value
    })
    this.update(node, val, 'model')
  }

  modelUpdate(node, val) {
    node.value = val;
  }
}

// Observe类，在其中进行数据判断，执行各自的操作
class Observe {
  constructor(obj) {
    this.walk(obj)
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key]);
    })
  }
}

// watcher 类，用来管理update函数
class Watcher {

  constructor(vm, key, updator) {
    // 关联的vm实例、关联的数据key、关联的更新函数
    this.vm = vm;
    this.key = key;
    this.updator = updator;

    Dep.target = this;
    // 这里触发get函数，进行依赖收集
    this.vm[this.key]
    Dep.target = null;
  }

  update() {
    this.updator.call(this.vm, this.vm[this.key]);
  }
}

// dep类，用来管理watcher
class Dep {

  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watch => {
      watch.update();
    })
  }
}

function proxy(target, data) {
  Object.keys(data).forEach(key => {
    Object.defineProperty(target, key, {
      get() {
        return data[key]
      },
      set(v) {
        data[key] = v;
      }
    })
  })
}

// 实现defineReactive方法，通过闭包，来对对象做数据绑定
function defineReactive(target, key, val) {
  const dep = new Dep();
  // 此处做递归遍历，将data中所有的对象都进行数据绑定
  observe(target[key])

  Object.defineProperty(target, key, {
    get() {
      Dep.target && dep.addDep(Dep.target); // 依赖收集
      return val;
    },
    set(v) {
      if (val !== v) {
        // 这里在直接给某个值设定为对象的时候生效，重新进行数据递归绑定
        observe(v)
        val = v;
        // 这里触发dep更新
        dep.notify();
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }

  new Observe(obj)
}


function set(obj, key, val) {
  defineReactive(obj, key, val);
}
