/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2021-11-19 15:36:51
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-21 11:16:54
 * @FilePath: /form-tempalte/src/components/antd-form-plugin/components/Select.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import { Select, Option } from 'element-ui'
// import { Select, Tag } from 'ant-design-vue'
import { isFunction, renderMixin } from '../utils'

export default function genSelect(options) {
  return Vue.component('Select', {
    mixins: [renderMixin],
    data() {
      return {
        theValue: ''
      }
    },
    computed: {
      theKey() {
        return options.value
      }
    },
    mounted() {
      this.theValue = options.defaultValue
    },
    methods: {
      json() {
        return {
          tag: Select,
          attrs: {
            ':value': this.theValue,
            '@input': (value) => {
              this.theValue = value
            },
            'placeholder': options.placeholder || '请选择',
            ':clearable': options.defaultValue === undefined && !(options.options || []).find(e => e.label === '全部' && e.value === undefined),
            '@change': isFunction(options.change) ? options.change : () => { },
            class: options.class,
            ':disabled': options.disabled,
            'style': options.style,
          },
          children: (options.options || []).map(option => {
            // debugger
            return {
              tag: Option,
              attrs: {
                ':label': option.label,
                ':value': option.value
              }
            }
          })
        }
      },
      reset() {
        this.theValue = options.defaultValue
      }
    }
  })
}
