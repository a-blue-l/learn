import Vue from 'vue';

const testData = [
  { id: 1, name: '大佬', age: '33', years: '10', monry: 50000 },
  { id: 2, name: '普通人', age: '28', years: '5', monry: 10000 },
  { id: 3, name: '菜鸟', age: '26', years: '3', monry: 2000 },
]

describe('lTalbe', () => {

  const vm = new Vue({
    data() {
      return {
        testData: []
      }
    },
    render(h) {
      return h('l-table', {
        attrs: {
          "data": testData
        }
      }, [h('l-table-column', {
        attrs: {
          "prop": "name",
          "label": "名字"
        }
      }), h('l-table-column', {
        attrs: {
          "prop": "age",
          "label": "年龄"
        }
      }), h('l-table-column', {
        attrs: {
          "prop": "years",
          "label": "工龄"
        }
      }), h('l-table-column', {
        attrs: {
          "prop": "money",
          "label": "薪资"
        }
      })], 1)
    },
    created() {
      // 填充数据
      this.testData = testData;
    }
  }).$mount(null)
  it('head', done => {

    setTimeout(() => {
      const head = [].slice.call(vm.$el.querySelectorAll('thead th'))

      expect(head.map(node => node.textContent)).toEqual(['名字', '年龄', '工龄', '薪资'])

      done()
    }, 10)

  })

  it('row length', () => {
    const tr = vm.$el.querySelectorAll('tbody tr').length;
    console.log(tr)
    expect(tr).toBe(testData.length)
  })
})
