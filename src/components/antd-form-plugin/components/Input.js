
/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2021-11-19 15:36:51
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-21 11:39:01
 * @FilePath: /form-tempalte/src/components/antd-form-plugin/components/Input.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import { Input } from 'ant-design-vue'
import { isFunction, renderMixin } from '../utils'

export default function genInput(options) {
  // debugger
  return Vue.component('Input', {
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
          tag: Input,
          attrs: {
            ':value': this.theValue,
            '@input': (e) => {
              this.setValue(e)
            },
            '@blur': isFunction(options.blur) ? options.blur : () => { },
            ':placeholder': options.placeholder || '请输入',
            ':allowClear': options.allowClear,
            ':disabled': options.disabled,
            '@change': isFunction(options.change) ? options.change : () => { },
            'style': options.style,
          },
        }
      },
      setValue(e) {
        const { value } = e.target
        this.theValue = value
      },
      reset() {
        this.theValue = options.defaultValue
      }
    }
  })
}
