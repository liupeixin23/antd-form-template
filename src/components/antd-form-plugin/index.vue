<script>
import { FormModel } from 'ant-design-vue'
import FormModelItem from './components/formModelItem.vue'
import { renderMixin } from './utils'
import components from './components'

export default {
  name: 'antd-form',
  props: {
    initItems: { // 表单项
      type: Array,
      default: function () {
        return []
      }
    },
    inline: { // 是否换行
      type: Boolean
    },
    labelPosition: { // top left
      type: String
    }
  },
  components: {
    FormModelItem
  },
  data() {
    return {
      potition: {
        top: ['flex', 'column'],
        left: ['flex', 'row'],
      },
    }
  },
  computed: {},
  mixins: [renderMixin],
  methods: {
    json() { // 用于生成页面的JSON
      return {
        tag: FormModel,
        attrs: {
          class: 'antd-form',
          ':inline': this.inline,
          'label-position': this.labelPosition,
          '@submit.native': function (event) { // 只有一个输入框时，阻止在输入框中按下回车提交表单
            event.preventDefault()
          },
        },
        children: this.initItems.map((item, index) => {
          const el = { // 每个表单项都用FormItem包一层
            tag: FormModelItem,
            attrs: {
              ':label': item.label,
              style: {
                display: !this.inline
                  ? this.potition[this.labelPosition][0] : 'inline-block',
                flexDirection: this.potition[this.labelPosition][1],
              }
            },
            children: this.genComponentsByTag(item)
          }
          return el
        }).flat()
      }
    },
    // 根据tag生成组件
    genComponentsByTag(item) {
      if (['Input', 'InputNumber', 'Select', 'Cascader'].includes(item.tag)) {
        return [components[`gen${item.tag}`](item)]
      }
      return [
        {
          tag: 'span',
          children: [
            {
              text: '暂未支持' + item.tag
            }
          ]
        }
      ]
    },
    // 获取表单的数据
    getFields() {
      const fields = {}
      const recursion = (node) => {
        node.$children.forEach(recursion)
        if (node.theKey) {
          fields[node.theKey] = node.theValue
        }
      }
      recursion(this)
      return fields
    },
    // 点击“查询”按钮
    onSubmit() {
      return this.getFields()
    },
    // 重置
    resetFields() {
      const recursion = (node) => {
        node.$children.forEach(recursion)
        node.reset && node.reset()
      }
      recursion(this)
    },
    // 点击“重置”按钮
    onReset() {
      this.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
</style>

