<!--
 * @Author: liupeixin liupx@nancal.com
 * @Date: 2022-06-01 20:07:40
 * @LastEditors: liupeixin liupx@nancal.com
 * @LastEditTime: 2022-07-21 11:45:43
 * @FilePath: /form-tempalte/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <h1>动态表单Demo</h1>
    <antd-form ref="elementForm" :initItems="items" labelPosition="top" :inline="false"></antd-form>
    <a-button type="primary" @click="onSearch">查询</a-button>
    <a-button @click="onReset">重置</a-button>
  </div>
</template>

<script>
import { cascaderOption, selectOption } from './data'
export default {
  name: 'home',
  data() {
    return {
      items: [
        {
          tag: 'Input',
          label: '名称',
          value: 'name',
          clearable: true,
          style: 'width:200px;',
          // placeholder: '请输入名称',
          allowClear: true,
          // disabled: true,
          // defaultValue: '张三',
          change: (e) => { this.handleInputChange(e) },
          blur: (e) => { this.handleInputBlur(e) },
        },
        {
          tag: 'Select',
          label: '渠道',
          value: 'channel',
          // defaultValue: 0,
          // placeholder: '请选择渠道',
          // disabled: true,
          clearable: true,
          style: 'width:200px;',
          change: (e) => { this.handleSelectChange(e) },
          options: selectOption()
        },
        {
          tag: 'InputNumber',
          label: '年龄',
          value: 'age',
          max: 100,
          min: 0,
          style: 'width:60px;',
        },
        {
          tag: 'Cascader',
          label: '地址',
          value: 'site',
          clearable: true,
          // placeholder: '请选择地址',
          style: 'width:200px;',
          change: (e) => { this.handleCascaderChange(e) },
          options: cascaderOption()
        },
        {
          tag: 'DateTimePicker',
          label: '反馈时间',
          value: 'time',
          clearable: true,
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          valueFormat: 'yyyy-MM-dd'
        }
      ]
    }
  },
  methods: {
    onSearch() {
      const formData = this.$refs.elementForm.onSubmit()
      console.log(formData)
    },
    onReset() {
      this.$refs.elementForm.onReset()
    },
    handleInputChange(e) {
      const { value } = e.target
      console.log(value, 'input的change事件触发！！！');
    },
    handleInputBlur(e) {
      const { value } = e.target
      console.log(value, 'input的blur事件触发！！！');
    },
    handleSelectChange(value) {
      console.log(value, 'select的change事件触发！！！');
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  margin: 20px;
}
</style>