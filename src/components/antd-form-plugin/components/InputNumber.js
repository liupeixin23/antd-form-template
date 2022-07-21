/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2021-11-19 15:36:51
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-19 19:32:44
 * @FilePath: /form-tempalte/src/components/element-form-plugin/components/InputNumber.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import { InputNumber } from 'ant-design-vue'
import { isFunction, renderMixin } from '../utils'

export default function genInputNumber(options) {
  return Vue.component('InputNumber', {
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
          tag: InputNumber,
          attrs: {
            ':value': this.theValue,
            '@change': (e) => {
              this.theValue = e
            },
            class: options.class,
            ':min': options.min,
            ':max': options.max,
            'style': options.style,
          }
        }
      },
      reset() {
        this.theValue = options.defaultValue
      }
    }
  })
}
