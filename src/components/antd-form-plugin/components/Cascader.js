/*
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2021-11-19 15:36:51
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-21 11:34:09
 * @FilePath: /form-tempalte/src/components/antd-form-plugin/components/Cascader.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import { Cascader } from 'ant-design-vue'
import { renderMixin } from '../utils'

export default function genCascader(options) {
  return Vue.component('Cascader', {
    mixins: [renderMixin],
    data() {
      return {
        theValue: []
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
          tag: Cascader,
          attrs: {
            ':value': this.theValue,
            ':options': options.options,
            ':props': options.props,
            'placeholder': options.placeholder || '请选择',
            ':clearable': options.defaultValue === undefined,
            '@change': (e) => {
              this.theValue = e
            },
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
